import React from "react";
import { ArticlesGrid } from "./components/ArticlesGrid";
import { TopBar } from "./components/TopBar";
import { ThemeContextProvider } from "./contexts/theme";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
    return (
        <CartContextProvider>
            <ThemeContextProvider>
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
            </ThemeContextProvider>
        </CartContextProvider>
    );
}

export default App;
