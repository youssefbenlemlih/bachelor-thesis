import React from "react";
import { ArticlesGrid } from "./components/ArticlesGrid";
import { TopBar } from "./components/TopBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { notifyRerender } from "./utils/notifyRerender";

const queryClient = new QueryClient();

function App() {
    notifyRerender("App")
    return (
        <QueryClientProvider client={queryClient}>
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: "min-content 1fr",
                }}
            >
                <TopBar />
                <ArticlesGrid />
            </div>
        </QueryClientProvider>
    );
}

export default App;
