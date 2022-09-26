import React from "react";
import Label from "./Label";
import Button from "./Button";
import Popup from "./Popup";
import { useAuth, useAuthActions } from "../hooks/auth";

function ProfilePopup() {
    const { data: auth } = useAuth();
    const { logout, login } = useAuthActions();

    return (
        <Popup>
            {auth?.authenticated ? (
                <>
                    <Label>Logged in as</Label>
                    <Label bold>{auth?.profile?.email}</Label>
                </>
            ) : (
                <Label>Currently logged out</Label>
            )}
            <Button onClick={() => (auth?.authenticated ? logout() : login())}>
                {auth?.authenticated ? "Log out" : "Log in"}
            </Button>
        </Popup>
    );
}

export default ProfilePopup;
