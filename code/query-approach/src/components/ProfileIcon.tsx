import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import ProfilePopup from "./ProfilePopup";
import { useAuth } from "../hooks/auth";
import { notifyRerender } from "../utils/notifyRerender";

function ProfileIcon() {
    notifyRerender("ProfileIcon")

    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));
    const { data: auth } = useAuth();
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button type={"secondary"} onClick={() => setOpen((o) => !o)}>
                {auth?.authenticated && auth?.profile
                    ? auth?.profile?.firstName[0].toUpperCase() +
                      auth?.profile?.lastName[0].toUpperCase()
                    : "👤"}
            </Button>
            {open && <ProfilePopup />}
        </div>
    );
}

export default ProfileIcon;
