import React from "react";
import Label from "./Label";
import Button from "./Button";
import Popup from "./Popup";
import { observer } from "mobx-react";
import { authStore } from "../stores/AuthStore";

function ProfilePopup() {
    return (
        <Popup>
            {authStore.isAuthenticated() ? (
                <>
                    <Label>Logged in as</Label>{" "}
                    <Label bold>{authStore.profile?.email}</Label>
                </>
            ) : (
                <Label>Currently logged out</Label>
            )}
            <Button
                onClick={() =>
                    authStore.isAuthenticated()
                        ? authStore.logOut()
                        : authStore.logIn()
                }
            >
                {authStore.isAuthenticated() ? "Log out" : "Log in"}
            </Button>
        </Popup>
    );
}

export default observer(ProfilePopup);
