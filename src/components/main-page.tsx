import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Layout } from "./layout";
import { AsyncDemo } from "./async-demo";
import { DataGridDemo } from "./data-grid-demo";




export default class MainPage extends React.Component {

    render() {

        return (
            <BrowserRouter >
                <Layout>
                    <Switch>
                        <Route path="/simple-table" component={DataGridDemo} />
                        <Route path="/" render={() => <AsyncDemo delay={2000} />} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }


}
