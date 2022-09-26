import React from "react";
import Label from "./Label";
import { CartEntryCard } from "./CartEntryCard";
import Button from "./Button";
import Popup from "./Popup";
import { observer } from "mobx-react";
import { cartStore } from "../stores/CartStore";

function CartPopup() {
    return (
        <Popup>
            <Label bold>Cart</Label>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {cartStore.cart?.entries.map((entry, index) => (
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
                <Label>
                    {cartStore?.cart?.shippingCosts.value}
                    {cartStore?.cart?.shippingCosts.currency}
                </Label>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Label bold>Total</Label>
                <Label>
                    {cartStore?.cart?.total.value}
                    {cartStore?.cart?.total.currency}
                </Label>
            </div>

            <Button>Proceed to checkout</Button>
        </Popup>
    );
}

export default observer(CartPopup);
