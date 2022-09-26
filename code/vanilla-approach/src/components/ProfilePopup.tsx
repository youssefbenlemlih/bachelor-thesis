import React from "react";
import Label from "./Label";
import Button from "./Button";
import Popup from "./Popup";
import { Theme } from "../theme";
import { Profile } from "../types";

type ProfilePopupProps = {
    theme: Theme;
    profile?: Profile;
    onLoginLogoutClick:()=>void
};

function ProfilePopup({ theme, profile,onLoginLogoutClick }: ProfilePopupProps) {
    return (
        <Popup theme={theme}>
            {profile ? (
                <>
                    <Label theme={theme}>Logged in as</Label>{" "}
                    <Label theme={theme} bold>
                        {profile.email}
                    </Label>
                </>
            ) : (
                <Label theme={theme}>Currently logged out</Label>
            )}
            <Button onClick={onLoginLogoutClick} theme={theme}>{profile ? "Log out" : "Log in"}</Button>
        </Popup>
    );
}

export default ProfilePopup;
