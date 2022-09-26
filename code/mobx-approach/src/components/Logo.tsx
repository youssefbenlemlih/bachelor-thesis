import { themeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react";

export const Logo = observer(() => {
    const { theme } = themeStore;

    return (
        <b>
            <p
                style={{
                    fontFamily: "'Courier New', monospace",
                    color: theme === "dark" ? "white" : "black",
                }}
            >
                Online Shop
            </p>
        </b>
    );
});
