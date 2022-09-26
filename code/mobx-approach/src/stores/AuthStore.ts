import { makeAutoObservable } from "mobx";
import { Profile } from "../types";
import { logIn, logOut } from "../service";

class AuthStore {
    profile?: Profile;

    constructor() {
        makeAutoObservable(this);
    }

    logIn = async () => {
        this.profile = await logIn();
    };
    logOut = async () => {
        await logOut();
        this.profile = undefined;
    };
    isAuthenticated = () => !!this.profile;
}

export const authStore = new AuthStore();
