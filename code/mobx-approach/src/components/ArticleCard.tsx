import { Article } from "../types";
import Label from "./Label";
import Button from "./Button";
import { observer } from "mobx-react";
import { cartStore } from "../stores/CartStore";

type PropType = {
    article: Article;
};

export const ArticleCard = observer(({ article }: PropType) => {
    const { img, name, price, id } = article;
    return (
        <div
            style={{
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <img
                style={{ borderRadius: 16, marginBottom: 8 }}
                src={img}
                alt={name}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Label bold>{name}</Label>
                    <Label>{`${price.value}${price.currency}`}</Label>
                </div>
                <Button
                    onClick={() => cartStore.addToCart(id)}
                    type={"secondary"}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
});
