import React from "react";
import { useTheme } from "../features/theme/themeSlice";

type TextProps = { children?: React.ReactNode; bold?: boolean };

function Label({ children, bold }: TextProps) {
    const theme = useTheme();

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
