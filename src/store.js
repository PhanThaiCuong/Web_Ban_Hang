import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
        // cart: [
        //     {"id":37, "ten_sp": "Acer 45", "so_luong": 3 },
        //     {"id":22, "ten_sp": "surface", "so_luong": 1 },
        //     {"id":68, "ten_sp": "IdeaPad", "so_luong": 2 }
        // ]
    },
})
