import React from "react";
import Label from "./Label";
import Button from "./Button";
import Popup from "./Popup";
import { useAuthActions, useAuthenticated, useProfile } from "../atoms";

function ProfilePopup() {
    const authenticated = useAuthenticated();
    const profile = useProfile();
    const { logout, login } = useAuthActions();
    return (
        <Popup>
            {authenticated ? (
                <>
                    <Label>Logged in as</Label>{" "}
                    <Label bold>{profile?.email}</Label>
                </>
            ) : (
                <Label>Currently logged out</Label>
            )}
            <Button onClick={() => (authenticated ? logout() : login())}>
                {authenticated ? "Log out" : "Log in"}
            </Button>
        </Popup>
    );
}

export default ProfilePopup;
