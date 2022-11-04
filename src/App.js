import { Container } from "@mui/material";
import Home from "./Components/ShoppingCart/Home";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import HomePage from "./Pages/Home/HomePage";
import ReactForm from "./Pages/ReactForm/ReactForm";
import Shop from "./Pages/Shop/Shop";
import AdminTemplate from "./Templates/AdminTemplate";
import Users from "./Pages/Admin/Users/Users";
import Products from "./Pages/Admin/Products/Products";
function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Routes>
          {/* Learn React-Router-Dom New Version */}
          <Route path="" element={<HomeTemplate />}>
            {/* outlet => gõ đúng path name thì nó sẽ render vào đúng trong component HomeTemplate, không cần phải định nghĩa HOC nữa*/}
            <Route path="/shoeshop" element={<Home />} />
            <Route path="home" element={<HomePage />} />
            <Route path="/reactform" element={<ReactForm />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<Navigate to={"home"} />} />
          </Route>

          <Route path="admin" element={<AdminTemplate/>}>
          <Route path="user" element={<Users/>}/>
          <Route path="product" element={<Products/>}/>
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
