import React from "react";
import { ArticlesGrid } from "./components/ArticlesGrid";
import { TopBar } from "./components/TopBar";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
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
        </RecoilRoot>
    );
}

export default App;
