import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import { Badge } from "./Badge";
import CartPopup from "./CartPopup";
import { useCartArticleCount } from "../hooks/cart";
import { notifyRerender } from "../utils/notifyRerender";

function CartIcon() {
    notifyRerender("CartIcon")

    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));
    const { data: count } = useCartArticleCount();
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button type={"secondary"} onClick={() => setOpen((o) => !o)}>
                🛒
            </Button>
            {!!count && <Badge>{count}</Badge>}
            {open && <CartPopup />}
        </div>
    );
}

export default CartIcon;
