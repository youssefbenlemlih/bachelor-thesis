import React, { CSSProperties } from "react";
import { useTheme } from "../hooks/theme";

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    type?: "primary" | "secondary";
};

function Button({ children, onClick, type = "primary" }: ButtonProps) {
    const theme = useTheme();

    const styles = {
        primary: {
            backgroundColor: theme === "dark" ? "#6cc56c" : "#76ab76",
            fontWeight: theme === "dark" ? "bold" : undefined,
            border: "none",
            color: "white",
            padding: "8px 16px",
            borderRadius: 16,
        } as CSSProperties,
        secondary: {
            backgroundColor: theme === "dark" ? "#e0dede" : "white",
            border:
                theme === "dark" ? "2px solid #6cc56c" : "1px solid #76ab76",
            color: theme === "dark" ? "#6cc56c" : "#76ab76",
            fontWeight: theme === "dark" ? "bold" : undefined,
            padding: "8px 16px",
            borderRadius: 16,
        } as CSSProperties,
    };
    return (
        <button style={styles[type]} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
