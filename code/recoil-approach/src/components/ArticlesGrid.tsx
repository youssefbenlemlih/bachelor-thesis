import { ArticleCard } from "./ArticleCard";
import { useArticles, useTheme } from "../atoms";

export function ArticlesGrid() {
    const theme = useTheme();
    const articles = useArticles();
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
            {articles?.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}
