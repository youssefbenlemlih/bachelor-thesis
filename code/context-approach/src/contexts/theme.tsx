import { createContext, useContext, useState } from "react";

export type Theme = "light" | "dark";

type ContextType = {
    theme: Theme;
    setTheme?: (t: Theme) => void;
};
const initialValue: ContextType = {
    theme: "light",
};
const ThemeContext = createContext<ContextType>(initialValue);

export const ThemeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState<Theme>(initialValue.theme);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => useContext(ThemeContext).theme;
export const useSetTheme = () => useContext(ThemeContext).setTheme;
