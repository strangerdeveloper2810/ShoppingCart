/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
export default function Search(props) {
  const [arrProduct, setArrProduct] = useState([]);

  const keywordRef = useRef("");

  const [searchParam, setSearchParam] = useSearchParams();

  const handleChangeKeyword = (event) => {
    const { value, id } = event.target;
    keywordRef.current = value;
  };

  useEffect(() => {
    (async () => {
      let keyword = "";
      if (searchParam.get("keyword") !== null) {
        //search?keyword=123
        keyword += searchParam.get("keyword");
      }

      if (keyword !== "") {
        try {
          let { data, status } = await axios({
            url:
              `http://svcy.myclass.vn/api/Product/SearchByName?name=` + keyword,
            method: "GET",
          });

          //   Lấy dữ liệu thành công từ server
          if (status === 200) {
            setArrProduct(data);
          }
        } catch (error) {
          console.log(error);
          setArrProduct([]);
          alert("Không tìm thấy sản phẩm!");
        }
      }
    })();
  }, [keywordRef.current]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParam({ keyword: keywordRef.current });
  };

  return (
    <div className="container">
      <form className="form-group" onSubmit={handleSubmit}>
        <h3 className="text-success fw-bold fs-3 mt-3">Search</h3>
        <div className="form-group mt-4">
          <input
            type="text"
            className="form-control w-50 d-inline me-4"
            name="keyword"
            id="keyword"
            onChange={handleChangeKeyword}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </div>
      </form>

      <div className="result mt-3">
        <h3 className="text-danger fw-bolder fs-3">Search Result!</h3>
        <div className="row">
          {arrProduct.map((item) => (
            <div className="col-4" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-title">{item.description}</p>
                  {/* <NavLink to={`/detail/${item.id}`} className="btn btn-primary">View Details</NavLink> */}
                  <button className="btn btn-info">View Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
