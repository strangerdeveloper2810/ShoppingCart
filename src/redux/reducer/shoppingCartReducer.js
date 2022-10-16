import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { shoppingCartServices } from "../../services/ShoppingCartServices";
import { STATUS_CODE, user_Data } from "../../util/constants/settingSystem";
const initialState = {
  cart: [],

  dataProduct: [],
};

const shoppingCartReducer = createSlice({
  name: "shoppingCartReducer",
  initialState,
  reducers: {
    getAllProductAction: (state, action) => {
      state.dataProduct = action.payload;
    },

    addToCartItemAction: (state, action) => {
      const itemCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemCart) {
        itemCart.quantity += 1;
        localStorage.setItem(user_Data, itemCart);
      } else {
        state.cart.push(action.payload);
      }
    },

    deleteCartItemAction: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Delete item success!",
      });
    },

    upAndDownItemCartAction: (state, action) => {
      const { id, quantity } = action.payload;
      const itemCart = state.cart.find((item) => item.id === id);
      if (itemCart) {
        itemCart.quantity += quantity;
      }
      if (itemCart.quantity < 1) {
        if (window.confirm("Do you want to delete it ?")) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          state.cart.quantity -= quantity;
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Delete item success!",
          });
        }
      }
    },
  },
});

export const {
  getAllProductAction,
  addToCartItemAction,
  deleteCartItemAction,
  upAndDownItemCartAction,
} = shoppingCartReducer.actions;

export default shoppingCartReducer.reducer;

// ---------action Thunk -----------
export const getAllProductApi = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await shoppingCartServices.getAllProductApi();
      if (status === STATUS_CODE.SUCCESS) {
        const action = getAllProductAction(data.content);

        dispatch(action);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
