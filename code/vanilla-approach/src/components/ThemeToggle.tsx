import React from "react";
import Button from "./Button";
import { Theme } from "../theme";

type ThemeToggleProps = {
    theme: Theme;
    setTheme: (t: Theme) => void;
};

function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
    return (
        <Button theme={theme} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌚" : "🌞"}
        </Button>
    );
}

export default ThemeToggle;
