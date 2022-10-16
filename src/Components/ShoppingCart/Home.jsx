import React, { Fragment } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Cart from "./Cart";
import Product from "./Product";

export default function Home(props) {
  return (
    <Fragment>
        <h1 className="mt-3 text-center text-green-600 text-2xl font-medium">Shoe Shops</h1>
      <Cart />
      <Product />
    </Fragment>
  );
}
