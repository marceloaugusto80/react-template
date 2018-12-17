import "@babel/polyfill";
import "semantic-ui-css/semantic.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Layout } from "./components/layout";
import { AsyncDemo } from "./components/async-demo";



let mainUi = (
    <Layout title="React template">
        <AsyncDemo title="Async Demo" delay={2000} />
    </Layout>
    ); 


ReactDOM.render(mainUi, document.getElementById("root"));

