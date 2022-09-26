import ThemeIcon from "./ThemeToggle";
import CartIcon from "./CartIcon";
import { Logo } from "./Logo";
import ProfileIcon from "./ProfileIcon";
import { Theme } from "../theme";
import { Cart } from "../types";

type TopBarProps = {
    theme: Theme;
    setTheme: (t: Theme) => void;
    cart?: Cart;
    onAddClicked: (articleId: string) => void;
    onRemoveClicked: (articleId: string) => void;
};

export function TopBar({
    theme,
    setTheme,
    cart,
    onRemoveClicked,
    onAddClicked,
}: TopBarProps) {
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
            <Logo theme={theme} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gridGap: 8,
                }}
            >
                <CartIcon
                    theme={theme}
                    cart={cart}
                    onAddClicked={onAddClicked}
                    onRemoveClicked={onRemoveClicked}
                />
                <ProfileIcon theme={theme} />
                <ThemeIcon theme={theme} setTheme={setTheme} />
            </div>
        </nav>
    );
}
