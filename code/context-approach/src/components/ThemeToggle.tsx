import React from "react";
import Button from "./Button";
import { useSetTheme, useTheme } from "../contexts/theme";

function ThemeToggle() {
    const theme = useTheme();
    const setTheme = useSetTheme();
    const isDark = theme === "dark";
    return (
        <Button onClick={() => setTheme?.(theme === "dark" ? "light" : "dark")}>
            {isDark ? "🌚" : "🌞"}
        </Button>
    );
}

export default ThemeToggle;
