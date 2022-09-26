import { atom, useRecoilState, useSetRecoilState } from "recoil";


type Theme = "light" | "dark";

const themeState = atom<Theme>({
    key: "themeState",
    default: "light",
});
export const useTheme = () => useRecoilState(themeState)[0];
export const useToggleTheme = () => {
    const setTheme = useSetRecoilState(themeState);
    return () => setTheme((theme) => (theme === "light" ? "dark" : "light"));
};
