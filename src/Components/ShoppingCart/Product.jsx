import { Container, Grid } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductList from "./ProductList";

export default function Product(props) {
  return (
    <Container>
      <h1 className="py-5 text-left text-2xl text-cyan-900 font-medium">
        Product List
      </h1>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <ProductList />
      </Grid>
    </Container>
  );
}
