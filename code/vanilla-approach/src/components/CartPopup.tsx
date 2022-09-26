import React from "react";
import Label from "./Label";
import { CartEntryCard } from "./CartEntryCard";
import Button from "./Button";
import { Cart } from "../types";
import Popup from "./Popup";
import { Theme } from "../theme";

type CartPopupProps = {
    theme: Theme;
    cart?: Cart;
    onAddClicked: (articleId: string) => void;
    onRemoveClicked: (articleId: string) => void;
};

function CartPopup({
    theme,
    cart,
    onRemoveClicked,
    onAddClicked,
}: CartPopupProps) {
    return (
        <Popup theme={theme}>
            <Label theme={theme} bold>
                Cart
            </Label>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {cart?.entries.map((entry, index) => (
                    <CartEntryCard
                        onAddClicked={() => onAddClicked(entry.article.id)}
                        onRemoveClicked={() =>
                            onRemoveClicked(entry.article.id)
                        }
                        theme={theme}
                        key={index}
                        entry={entry}
                    />
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Label theme={theme}>Shipping</Label>
                <Label theme={theme}>
                    {cart?.shippingCosts?.value}
                    {cart?.shippingCosts.currency}
                </Label>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Label theme={theme} bold>
                    Total
                </Label>
                <Label theme={theme} bold>
                    {cart?.total.value}
                    {cart?.total.currency}
                </Label>
            </div>

            <Button theme={theme}>Proceed to checkout</Button>
        </Popup>
    );
}

export default CartPopup;
