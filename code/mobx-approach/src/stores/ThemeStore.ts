import { makeAutoObservable } from "mobx";

type Theme = "light" | "dark";

class ThemeStore {
    theme: Theme = "light";

    constructor() {
        makeAutoObservable(this);
    }

    toggle = () => {
        this.theme = this.theme === "light" ? "dark" : "light";
    };
}

export const themeStore = new ThemeStore();
