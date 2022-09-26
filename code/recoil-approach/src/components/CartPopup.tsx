import React from "react";
import Label from "./Label";
import { CartEntryCard } from "./CartEntryCard";
import Button from "./Button";
import Popup from "./Popup";
import { useCart } from "../atoms";

function CartPopup() {
    const cart = useCart();
    return (
        <Popup>
            <Label bold>Cart</Label>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {cart?.entries.map((entry, index) => (
                    <CartEntryCard key={index} entry={entry} />
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Label>Shipping</Label>
                <Label bold>
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
                <Label bold>Total</Label>
                <Label bold>
                    {cart?.total?.value}
                    {cart?.total.currency}
                </Label>
            </div>

            <Button>Proceed to checkout</Button>
        </Popup>
    );
}

export default CartPopup;
