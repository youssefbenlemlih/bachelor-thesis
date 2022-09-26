import React from "react";
import Button from "./Button";
import { themeStore } from "../stores/ThemeStore";

import { observer } from "mobx-react";

function ThemeToggle() {
    const { theme } = themeStore;
    const isDark = theme === "dark";
    return <Button onClick={themeStore.toggle}>{isDark ? "🌚" : "🌞"}</Button>;
}

export default observer(ThemeToggle);
