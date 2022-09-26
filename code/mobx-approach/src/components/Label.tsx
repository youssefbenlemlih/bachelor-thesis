import React from "react";
import { themeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react";

type TextProps = { children?: React.ReactNode; bold?: boolean };

function Label({ children, bold }: TextProps) {
    const { theme } = themeStore;

    return (
        <p
            style={{
                fontWeight: bold ? "bold" : undefined,
                color: theme === "dark" ? "white" : "black",
            }}
        >
            {children}
        </p>
    );
}

export default observer(Label);
