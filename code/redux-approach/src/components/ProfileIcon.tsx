import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import ProfilePopup from "./ProfilePopup";
import { useAuth } from "../features/theme/authSlice";

function ProfileIcon() {
    const [open, setOpen] = useState(false);
    const { authenticated, profile } = useAuth();
    const ref = useOuterClick(() => setOpen(false));
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
