import { Article } from "../types";
import { ArticleCard } from "./ArticleCard";
import { Theme } from "../theme";

type ArticlesGridProps = {
    theme: Theme;
    articles: Article[];
    onAddToCartClick: (id: string) => void;
};

export function ArticlesGrid({
    theme,
    articles,
    onAddToCartClick,
}: ArticlesGridProps) {
    return (
        <div
            style={{
                display: "grid",
                padding: 16,
                gridGap: 16,
                backgroundColor: theme === "dark" ? "#212121" : "#eee",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            }}
        >
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                    theme={theme}
                    onAddToCartClick={() => onAddToCartClick(article.id)}
                />
            ))}
        </div>
    );
}
