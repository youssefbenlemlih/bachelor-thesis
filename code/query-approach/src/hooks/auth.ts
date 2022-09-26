import { useQuery, useQueryClient } from "react-query";
import { Profile } from "../types";
import { logIn, logOut } from "../service";

type Auth = {
    profile?: Profile;
    authenticated: boolean;
};
export const useAuth = () =>
    useQuery<Auth>("profile", () => ({ authenticated: false }));

export const useAuthActions = () => {
    const client = useQueryClient();
    return {
        login: () =>
            logIn().then((profile) =>
                client.setQueryData("profile", { profile, authenticated: true })
            ),
        logout: () =>
            logOut().then(() =>
                client.setQueryData("profile", { authenticated: false })
            ),
    };
};
