import React from "react";
import { useTheme } from "../hooks/theme";

export function Badge({ children }: { children: React.ReactNode }) {
    const theme = useTheme();

    return (
        <div
            style={{
                position: "absolute",
                bottom: "60%",
                right: "-20%",
                borderRadius: "50%",
                backgroundColor: theme === "dark" ? "#6cc56c" : "#76ab76",
                padding: 2,
                paddingLeft: 4,
                paddingRight: 4,
                fontSize: 12,
                color: "white",
            }}
        >
            {children}
        </div>
    );
}
