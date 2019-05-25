import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Layout } from "./layout";
import { AsyncDemo } from "./async-demo";
import { DataGridDemo } from "./data-grid-demo";
import { hot } from "react-hot-loader/root";



class MainPage extends React.Component {

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

// you need to export the component this way to hot reload to work.
export default hot(MainPage);