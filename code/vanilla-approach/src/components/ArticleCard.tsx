import { Article } from "../types";
import Label from "./Label";
import Button from "./Button";
import { Theme } from "../theme";

type PropType = {
    article: Article;
    theme: Theme;
    onAddToCartClick: () => void;
};

export function ArticleCard({ article, theme, onAddToCartClick }: PropType) {
    const { img, name, price } = article;
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
                    <Label theme={theme} bold>
                        {name}
                    </Label>
                    <Label
                        theme={theme}
                    >{`${price.value}${price.currency}`}</Label>
                </div>
                <Button
                    theme={theme}
                    type={"secondary"}
                    onClick={onAddToCartClick}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
}
