import { atom, selector, useRecoilCallback, useRecoilValue } from "recoil";
import { Profile } from "../types";
import { logIn, logOut } from "../service";
import _ from "lodash";

const profileState = atom<Profile | undefined>({
    key: "profileState",
    default: undefined,
});
const authenticatedState = selector({
    key: "authenticatedState",
    get: ({ get }) => get(profileState) !== undefined,
});
export const useAuthActions = () => {
    const login = useRecoilCallback(({ set }) => async () => {
        const profile = await logIn();
        set(profileState, _.cloneDeep(profile));
    });
    const logout = useRecoilCallback(({ set }) => async () => {
        await logOut();
        set(profileState, undefined);
    });
    return { login, logout };
};
export const useProfile = () => useRecoilValue(profileState);
export const useAuthenticated = () => useRecoilValue(authenticatedState);
