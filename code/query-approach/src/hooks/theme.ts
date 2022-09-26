import { useQuery, useQueryClient } from "react-query";

export type Theme = "light" | "dark";
export var theme: Theme = "light";

export const useTheme = () => useQuery("theme", () => theme).data;

export const useToggleTheme = () => {
    const queryClient = useQueryClient();
    return () => {
        theme = theme === "light" ? "dark" : "light";
        return queryClient.invalidateQueries("theme");
    };
};
