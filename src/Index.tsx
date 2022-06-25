import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";

const App = () => {
    // setting browser router here, in case you want to render MainLayout in ssr (wich uses StaticRouter).
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

