import { Grid } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import ProductItem from "./ProductItem";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductApi } from "../../redux/reducer/shoppingCartReducer";

export default function ProductList(props) {
  const product = useSelector((state) => state.shoppingCartReducer.dataProduct);
  const dispatch = useDispatch();
  useEffect(()=>{
    const actionThunk = getAllProductApi();
    dispatch(actionThunk);
  },[]);
  const renderProductList = () => {
    return product.map((item, index) => (
      <Grid item xs={4} key={index}>
        <ProductItem product={item} />
      </Grid>
    ));
  };
  return <Fragment>{renderProductList()}</Fragment>;
}
