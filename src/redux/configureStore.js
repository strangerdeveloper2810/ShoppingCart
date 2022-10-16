import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./reducer/shoppingCartReducer";

const store = configureStore({
    reducer: {
        shoppingCartReducer,
    }
});

export default store;