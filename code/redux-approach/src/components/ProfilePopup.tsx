import React from "react";
import Label from "./Label";
import Button from "./Button";
import Popup from "./Popup";
import {
    logInAction,
    logOutAction,
    useAuth,
} from "../features/theme/authSlice";
import { useAppDispatch } from "../store";

function ProfilePopup() {
    const { authenticated, profile } = useAuth();
    const dispatch = useAppDispatch();
    return (
        <Popup>
            {authenticated && profile ? (
                <>
                    <Label>Logged in as</Label>{" "}
                    <Label bold>{profile.email}</Label>
                </>
            ) : (
                <Label>Currently logged out</Label>
            )}
            <Button
                onClick={() =>
                    authenticated
                        ? dispatch(logOutAction())
                        : dispatch(logInAction())
                }
            >
                {authenticated ? "Log out" : "Log in"}
            </Button>
        </Popup>
    );
}

export default ProfilePopup;
