import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import { Badge } from "./Badge";
import CartPopup from "./CartPopup";
import { useCartItemsCount } from "../atoms";

function CartIcon() {
    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));
    const count = useCartItemsCount();
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button type={"secondary"} onClick={() => setOpen((o) => !o)}>
                🛒
            </Button>
            {count > 0 && <Badge>{count}</Badge>}
            {open && <CartPopup />}
        </div>
    );
}

export default CartIcon;
