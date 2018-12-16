import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Layout } from "./components/layout";
import { AsyncDemo } from "./components/AsyncDemo";


let mainUi = (
    <Layout title="React template">
        <AsyncDemo title="Async Demo" delay={2000} />
    </Layout>
    );


ReactDOM.render(mainUi, document.getElementById("root"));

