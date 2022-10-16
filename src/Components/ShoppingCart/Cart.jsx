import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card } from "@mui/material";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItemAction, upAndDownItemCartAction } from "../../redux/reducer/shoppingCartReducer";

export default function Cart(props) {
  const cart = useSelector((state) => state.shoppingCartReducer.cart);
  
  const dispatch = useDispatch();

  const handleDeleteCartItem = (id) => {
    const action = deleteCartItemAction(id);
    dispatch(action);
  }

  const handleUpAndDownCartItem = (id, number) => {
    const quantityItem = {
      id: id, 
      quantity: number
    }
    const action = upAndDownItemCartAction(quantityItem);
    dispatch(action);
  }

  
  const renderItemCart = () => {
    return cart.map((item, index) => (
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          {item.id}
        </TableCell>

        <TableCell align="center">{item.name}</TableCell>

        <TableCell align="center">
          <img
            src={item.image}
            alt={item.name}
            className="relative top-0 left-10"
            width={100}
          />
        </TableCell>

        <TableCell align="center">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            color="success"
            onClick={()=>{
              handleUpAndDownCartItem(item.id, 1);
            }}
          ></Button>
          {item.quantity}
          <Button
            variant="contained"
            startIcon={<RemoveIcon />}
            color="error"
            onClick={()=>{
              handleUpAndDownCartItem(item.id ,-1);
            }}
          ></Button>
        </TableCell>

        <TableCell align="center">{item.price.toLocaleString()} $</TableCell>

        <TableCell align="center">
          {(item.quantity * item.price).toLocaleString()} $
        </TableCell>

        <TableCell align="center">
          <Button
            variant="contained"
            color="error"
            onClick={()=>{
              handleDeleteCartItem(item.id)
            }}
          >Delete</Button>
        </TableCell>
      </TableRow>
    ));
  };
  return (
    <Container maxWidth="lg">
      <h1 className="text-left mr-5 text-xl text-sky-700 font-semibold">
        Carts
      </h1>
      <TableContainer component={Card}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price ($)</TableCell>
              <TableCell align="center">Total ($)</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderItemCart()}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
