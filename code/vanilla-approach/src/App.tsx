import React, { useEffect, useState } from "react";
import { ArticlesGrid } from "./components/ArticlesGrid";
import { TopBar } from "./components/TopBar";
import { Theme } from "./theme";
import { Article, Cart } from "./types";
import {
    addArticleToCart,
    getAllArticles,
    getCart,
    removeArticleFromCart,
} from "./service";

function App() {
    const [theme, setTheme] = useState<Theme>("light");
    const [articles, setArticles] = useState<Article[]>([]);
    const [cart, setCart] = useState<Cart | undefined>();
    const loadArticles = async () => {
        const loadedArticles = await getAllArticles();
        setArticles(loadedArticles);
    };
    const loadCart = async () => {
        const loadedCart = await getCart();
        setCart(loadedCart);
    };
    useEffect(() => {
        loadArticles();
        loadCart();
    }, []);
    const onAddToCartClick = async (id: string) => {
        const newCart = await addArticleToCart(id);
        setCart(newCart);
    };
    const onRemoveClicked = async (id: string) => {
        const newCart = await removeArticleFromCart(id);
        setCart(newCart);
    };
    return (
        <div
            style={{
                display: "grid",
                gridTemplateRows: "min-content 1fr",
                height: "100vh",
            }}
        >
            <TopBar
                theme={theme}
                setTheme={setTheme}
                cart={cart}
                onAddClicked={onAddToCartClick}
                onRemoveClicked={onRemoveClicked}
            />
            <ArticlesGrid
                theme={theme}
                articles={articles}
                onAddToCartClick={onAddToCartClick}
            />
        </div>
    );
}

export default App;
