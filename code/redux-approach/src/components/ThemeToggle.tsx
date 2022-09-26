import React from "react";
import Button from "./Button";
import { toggleTheme, useTheme } from "../features/theme/themeSlice";
import { useAppDispatch } from "../store";

function ThemeToggle() {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const isDark = theme === "dark";
    return (
        <Button onClick={() => dispatch(toggleTheme())}>
            {isDark ? "🌚" : "🌞"}
        </Button>
    );
}

export default ThemeToggle;
