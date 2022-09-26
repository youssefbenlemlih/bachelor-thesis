import React from "react";
import { ArticlesGrid } from "./components/ArticlesGrid";
import { TopBar } from "./components/TopBar";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
