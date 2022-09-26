import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import ProfilePopup from "./ProfilePopup";
import { observer } from "mobx-react";
import { authStore } from "../stores/AuthStore";

function ProfileIcon() {
    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button type={"secondary"} onClick={() => setOpen((o) => !o)}>
                {authStore.isAuthenticated() && authStore.profile
                    ? authStore.profile.firstName[0].toUpperCase() +
                      authStore.profile.lastName[0].toUpperCase()
                    : "👤"}
            </Button>
            {open && <ProfilePopup />}
        </div>
    );
}

export default observer(ProfileIcon);
