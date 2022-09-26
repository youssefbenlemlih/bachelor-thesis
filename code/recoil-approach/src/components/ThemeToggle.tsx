import React from "react";
import Button from "./Button";
import { useTheme, useToggleTheme } from "../atoms";

function ThemeToggle() {
    const theme = useTheme();
    const toggleTheme = useToggleTheme();

    const isDark = theme === "dark";
    return <Button onClick={toggleTheme}>{isDark ? "🌚" : "🌞"}</Button>;
}

export default ThemeToggle;
