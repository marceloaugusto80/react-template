import "@babel/polyfill";
import "typeface-roboto";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Layout } from "./components/layout";
import { AsyncDemo } from "./components/async-demo";
import { FancyDemo } from "./components/fancy-demo"; 


let mainUi = (
    <Layout title="React template">
        <FancyDemo />
        <AsyncDemo title="Async Demo" delay={2000} />
    </Layout>
    ); 


ReactDOM.render(mainUi, document.getElementById("root"));

