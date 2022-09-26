import { Article } from "../types";
import { ArticleCard } from "./ArticleCard";
import { useTheme } from "../contexts/theme";
import { useEffect, useState } from "react";
import { getAllArticles } from "../service";

export function ArticlesGrid() {
    const theme = useTheme();
    const [articles, setArticles] = useState<Article[]>([]);
    const loadArticles = async () => {
        const loadedArticles = await getAllArticles();
        setArticles(loadedArticles);
    };
    useEffect(() => {
        loadArticles();
    }, []);
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
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}
