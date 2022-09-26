import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
    addArticleToCart,
    getCart,
    removeArticleFromCart,
} from "../../service";
import { Cart } from "../../types";
import _ from "lodash";

export type CartState = { cart?: Cart };

const initialState: CartState = {};

export const cartSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => action.type.endsWith("/fulfilled"),
            (state, action) => {
                state.cart = _.cloneDeep(action.payload);
            }
        );
    },
});

export const loadCart = createAsyncThunk("cart/loadCart", getCart);
export const addToCart = createAsyncThunk("cart/addToCart", addArticleToCart);
export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    removeArticleFromCart
);

export default cartSlice.reducer;
export const useCart = () => useSelector((state: RootState) => state.cart.cart);
