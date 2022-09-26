import React, { useEffect } from "react";
import { ArticlesGrid } from "./components/ArticlesGrid";
import { TopBar } from "./components/TopBar";
import { observer } from "mobx-react";
import { cartStore } from "./stores/CartStore";
import { articlesStore } from "./stores/ArticlesStore";

function App() {
    useEffect(() => {
        cartStore.load();
        articlesStore.load();
    });
    return (
        <div
            style={{
                display: "grid",
                gridTemplateRows: "min-content 1fr",
                height: "100vh",
            }}
        >
            <TopBar />
            <ArticlesGrid />
        </div>
    );
}

export default observer(App);
