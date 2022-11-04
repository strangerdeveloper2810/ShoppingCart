import React from "react";
import {NavLink} from "react-router-dom";
const arrProduct = [
  { id: 1, price: 1000, name: "Product 1" },
  { id: 2, price: 2000, name: "Product 2" },
  { id: 3, price: 3000, name: "Product 3" },
];
export default function Shop(props) {
  return (
    <div className="container">
      <h3 className="text-center text-info">Product List</h3>
      <div className="row">
        {arrProduct.map((item) => (
          <div className="col-4" key={item.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`https://picsum.photos/id/${item.id}/200/200`}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <NavLink to={`/detail/${item.id}`} className="btn btn-primary">View Details</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
