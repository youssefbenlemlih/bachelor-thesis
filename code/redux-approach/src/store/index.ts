import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/theme/authSlice";
import articlesReducer, { loadArticles } from "../features/theme/articlesSlice";
import cartReducer, { loadCart } from "../features/theme/cartSlice";
import themeReducer from "../features/theme/themeSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer,
        articles: articlesReducer,
        auth: authReducer,
    },
});
store.dispatch(loadCart());
store.dispatch(loadArticles());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
