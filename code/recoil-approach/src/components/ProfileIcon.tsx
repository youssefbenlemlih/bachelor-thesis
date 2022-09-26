import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import ProfilePopup from "./ProfilePopup";
import { useAuthenticated, useProfile } from "../atoms";

function ProfileIcon() {
    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));
    const authenticated = useAuthenticated();
    const profile = useProfile();
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button type={"secondary"} onClick={() => setOpen((o) => !o)}>
                {authenticated && profile
                    ? profile?.firstName[0].toUpperCase() +
                    profile?.lastName[0].toUpperCase()
                    : "👤"}
            </Button>
            {open && <ProfilePopup />}
        </div>
    );
}

export default ProfileIcon;
