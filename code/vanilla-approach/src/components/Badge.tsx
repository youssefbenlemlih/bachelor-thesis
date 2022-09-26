import React from "react";
import { Theme } from "../theme";

export function Badge({ children, theme }: { children: React.ReactNode, theme:Theme }) {
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
                color: "white"
            }}
        >
            {children}
        </div>
    );
}