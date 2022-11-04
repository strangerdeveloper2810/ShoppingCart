import React, { useRef } from "react";
import { Container } from "@mui/material";
// import {history} from "../../App";
import {useNavigate} from "react-router-dom"
export default function ReactForm(props) {
  const navigate = useNavigate();
  const userLoginRef = useRef({
    userName: "",
    password: "",
  });

  const handleChangeInput = (event) => {
    const { id, value } = event.target;
    userLoginRef.current[id] = value;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let login = new Promise((resolve, reject) => {
      const flag = true;
      if (flag) {
        setTimeout(() => {
          console.log("Đăng Nhập API");
          resolve("Đăng nhập thành công!");
        }, 2000);
      } else {
        console.log("Lỗi rồi ông cháu êiii");
        reject("Không đăng nhập được, mời thử lại");
      }
    });

    let result = await login;
    console.log(result);
    navigate("home", {replace: false});
    // có replace: là không lưu lại lịch sử khi back trang
    // không replace: là lưu lại lịch sử khi back trang 





    // history.push("/");

    // let result = await login;
    // result
    //   .then((res) => {
    //     console.log("Đăng nhập thành công!", res);
    //     history.push("/");
    //   })
    //   .catch((error) => {
    //     console.log("Lỗi rồi ông cháu, ông cháu đăng nhập lại đê!", error);
    //   });

    console.log(userLoginRef.current);
  };
  return (
    <Container maxWidth="xl">
      <h3 className="text-success fw-bold fs-3 mb-2">Login</h3>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="User Name" className="fw-bold mb-3">
            UserName
          </label>
          <input
            type="text"
            className="form-control w-25"
            id="userName"
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password" className="fw-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="form-control w-25"
            id="password"
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group mt-3">
          <button className="btn btn-info" type="submit">
            Login
          </button>
        </div>
      </form>
    </Container>
  );
}
