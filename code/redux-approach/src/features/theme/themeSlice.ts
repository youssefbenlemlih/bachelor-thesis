import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export type ThemeState = { theme: "light" | "dark" };

const initialState: ThemeState = {
    theme: "light",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
export const useTheme = () =>
    useSelector((state: RootState) => state.theme.theme);
