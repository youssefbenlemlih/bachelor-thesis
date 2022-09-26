import React from "react";
import { Theme } from "../theme";

type TextProps = { children?: React.ReactNode; bold?: boolean; theme: Theme };

function Label({ children, bold, theme }: TextProps) {
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

export default Label;
