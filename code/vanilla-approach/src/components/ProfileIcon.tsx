import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import ProfilePopup from "./ProfilePopup";
import { Theme } from "../theme";
import { Profile } from "../types";
import { logIn, logOut } from "../service";

type ProfileIconProps = {
    theme: Theme;
};

function ProfileIcon({ theme }: ProfileIconProps) {
    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));
    const [profile, setProfile] = useState<Profile | undefined>();

    const onLoginLogoutClick = async () => {
        if (profile) {
            await logOut();
            setProfile(undefined);
        } else {
            const newProfile = await logIn();
            setProfile(newProfile);
        }
    };
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button
                theme={theme}
                type={"secondary"}
                onClick={() => setOpen((o) => !o)}
            >
                {profile
                    ? profile?.firstName[0].toUpperCase() +
                      profile?.lastName[0].toUpperCase()
                    : "👤"}
            </Button>
            {open && (
                <ProfilePopup
                    theme={theme}
                    profile={profile}
                    onLoginLogoutClick={onLoginLogoutClick}
                />
            )}
        </div>
    );
}

export default ProfileIcon;
