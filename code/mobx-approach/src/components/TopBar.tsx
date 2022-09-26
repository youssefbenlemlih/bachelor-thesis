import ThemeIcon from "./ThemeToggle";
import CartIcon from "./CartIcon";
import { Logo } from "./Logo";
import ProfileIcon from "./ProfileIcon";
import { themeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react";

export const TopBar = observer(() => {
    const { theme } = themeStore;

    return (
        <nav
            style={{
                display: "flex",
                backgroundColor: theme === "dark" ? "#383838" : "white",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 8,
            }}
        >
            <Logo />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gridGap: 8,
                }}
            >
                <CartIcon />
                <ProfileIcon />
                <ThemeIcon />
            </div>
        </nav>
    );
});
