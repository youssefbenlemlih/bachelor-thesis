import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import { Badge } from "./Badge";
import CartPopup from "./CartPopup";
import { observer } from "mobx-react";
import { cartStore } from "../stores/CartStore";

function CartIcon() {
    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));
    const { cart } = cartStore;
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button type={"secondary"} onClick={() => setOpen((o) => !o)}>
                🛒
            </Button>
            {cart && cart.entries.length > 0 && (
                <Badge>{cart.entries.length}</Badge>
            )}
            {open && <CartPopup />}
        </div>
    );
}

export default observer(CartIcon);
