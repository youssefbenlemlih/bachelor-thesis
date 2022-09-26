import { CartEntry } from "../types";
import Button from "./Button";
import Label from "./Label";
import { useCartContext } from "../contexts/CartContext";

type PropType = {
    entry: CartEntry;
};

export function CartEntryCard({ entry }: PropType) {
    const { img, price, name, id } = entry.article;
    const { addToCart, removeFromCart } = useCartContext();
    return (
        <div
            style={{
                borderRadius: 16,
                display: "flex",
                gridGap: 8,
            }}
        >
            <img
                style={{ borderRadius: 16, marginBottom: 8, height: 100 }}
                src={img}
                alt={name}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <br />
                <Label bold>{name}</Label>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gridGap: 4,
                    }}
                >
                    <div style={{ paddingRight: 24 }}>
                        <Label>{`${price.value}${price.currency}`}</Label>
                    </div>
                    <Button
                        type={"secondary"}
                        onClick={() => removeFromCart?.(id)}
                    >
                        -
                    </Button>
                    <Label>{entry.count}</Label>
                    <Button onClick={() => addToCart?.(id)}>+</Button>
                </div>
            </div>
        </div>
    );
}
