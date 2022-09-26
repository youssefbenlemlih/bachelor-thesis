import { Theme } from "../theme";

type LogoProps = {
    theme: Theme;
};

export function Logo({ theme }: LogoProps) {
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
