import { ArticleCard } from "./ArticleCard";
import { themeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react";
import { articlesStore } from "../stores/ArticlesStore";

export const ArticlesGrid = observer(() => {
    const { theme } = themeStore;
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
            {articlesStore.articles?.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
});
