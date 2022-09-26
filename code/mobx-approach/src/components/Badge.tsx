import React from "react";
import { themeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react";

export const Badge = observer(({ children }: { children: React.ReactNode }) => {
    const { theme } = themeStore;

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
});
