import { Article } from "../types";
import Label from "./Label";
import Button from "./Button";
import { useCartContext } from "../contexts/CartContext";

type PropType = {
    article: Article;
};

export function ArticleCard({ article }: PropType) {
    const { img, name, price, id } = article;
    const { addToCart } = useCartContext();
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
                <Button onClick={() => addToCart?.(id)} type={"secondary"}>
                    Add to cart
                </Button>
            </div>
        </div>
    );
}
