import { useTheme } from "../contexts/theme";

export function Logo() {
    const theme = useTheme();

    return (
        <b>
            <p
                style={{
                    fontFamily: "'Courier New', monospace",
                    color: theme === "dark" ? "white" : "black",
                }}
            >
                Online Shop
            </p>
        </b>
    );
}
