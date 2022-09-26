import React from "react";
import { themeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react";

function Popup({ children }: { children: React.ReactNode }) {
    const { theme } = themeStore;

    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: theme === "dark" ? "#424242" : "white",
                borderRadius: 16,
                right: "0",
                padding: 16,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                minWidth: "200px",
            }}
        >
            {children}
        </div>
    );
}

export default observer(Popup);
