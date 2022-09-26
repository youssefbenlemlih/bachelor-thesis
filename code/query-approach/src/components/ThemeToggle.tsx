import React from "react";
import Button from "./Button";
import { useTheme, useToggleTheme } from "../hooks/theme";
import { notifyRerender } from "../utils/notifyRerender";

function ThemeToggle() {
    notifyRerender("ThemeToggle")

    const theme = useTheme();
    const toggle = useToggleTheme();
    const isDark = theme === "dark";
    return <Button onClick={toggle}>{isDark ? "🌚" : "🌞"}</Button>;
}

export default ThemeToggle;
