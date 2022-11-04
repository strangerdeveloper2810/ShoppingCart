import { Container } from "@mui/material";
import Home from "./Components/ShoppingCart/Home";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import HomeTemplate from "./Templates/HomeTemplate";
import HomePageWithNavigate from "./Pages/Home/HomePage";
import ReactForm from "./Pages/ReactForm/ReactForm";
import Shop from "./Pages/Shop/Shop";
import AdminTemplate from "./Templates/AdminTemplate";
import Users from "./Pages/Admin/Users/Users";
import Products from "./Pages/Admin/Products/Products";
import Detail from "./Pages/Detail/Detail";
import Search from "./Pages/Search/Search";

export const history = createBrowserHistory({ window });
function App() {
  return (
    <HistoryRouter history={history}>
      <Container maxWidth="xl">
        <Routes>
          {/* Learn React-Router-Dom New Version */}
          <Route path="" element={<HomeTemplate />}>
            {/* outlet => gõ đúng path name thì nó sẽ render vào đúng trong component HomeTemplate, không cần phải định nghĩa HOC nữa*/}
            <Route path="shoeshop" element={<Home />} />
            <Route path="home" element={<HomePageWithNavigate />} />
            <Route path="reactform" element={<ReactForm />} />
            <Route path="shop" element={<Shop />} />
            <Route path="detail">
              <Route path=":id" element={<Detail/>}/>
            </Route>

            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<Navigate to={"home"} />} />
          </Route>

          <Route path="admin" element={<AdminTemplate />}>
            <Route path="user" element={<Users />} />
            <Route path="product" element={<Products />} />
          </Route>
        </Routes>
      </Container>
    </HistoryRouter>
  );
}

export default App;
