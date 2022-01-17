import * as React from "react";
import * as ReactDOM from "react-dom";
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

ReactDOM.render(<App />, document.getElementById("root"));

