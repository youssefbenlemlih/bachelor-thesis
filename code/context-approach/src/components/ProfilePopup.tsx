import React from "react";
import Label from "./Label";
import Button from "./Button";
import Popup from "./Popup";
import { Profile } from "../types";

type ProfilePopupProps = {
    profile?: Profile;
    onLoginLogoutClick: () => void;
};

function ProfilePopup({ profile, onLoginLogoutClick }: ProfilePopupProps) {
    return (
        <Popup>
            {profile ? (
                <>
                    <Label>Logged in as</Label>
                    <Label bold>{profile.email}</Label>
                </>
            ) : (
                <Label>Currently logged out</Label>
            )}
            <Button onClick={onLoginLogoutClick}>
                {profile ? "Log out" : "Log in"}
            </Button>
        </Popup>
    );
}

export default ProfilePopup;