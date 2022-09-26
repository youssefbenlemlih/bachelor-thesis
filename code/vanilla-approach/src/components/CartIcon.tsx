import React, { useState } from "react";
import { useOuterClick } from "../utils/useOuterClick";
import Button from "./Button";
import { Badge } from "./Badge";
import CartPopup from "./CartPopup";
import { Theme } from "../theme";
import { Cart } from "../types";

type CartIconProps = {
    theme: Theme;
    cart?: Cart;
    onAddClicked: (articleId: string) => void;
    onRemoveClicked: (articleId: string) => void;
};

function CartIcon({
    theme,
    cart,
    onRemoveClicked,
    onAddClicked,
}: CartIconProps) {
    const [open, setOpen] = useState(false);
    const ref = useOuterClick(() => setOpen(false));

    return (
        <div ref={ref} style={{ position: "relative" }}>
            <Button
                theme={theme}
                type={"secondary"}
                onClick={() => setOpen((o) => !o)}
            >
                🛒
            </Button>
            {cart && cart.entries.length > 0 && (
                <Badge theme={theme}>{cart?.entries.length}</Badge>
            )}
            {open && (
                <CartPopup
                    theme={theme}
                    cart={cart}
                    onRemoveClicked={onRemoveClicked}
                    onAddClicked={onAddClicked}
                />
            )}
        </div>
    );
}

export default CartIcon;
