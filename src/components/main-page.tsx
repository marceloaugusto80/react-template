import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Layout, ILayoutLink } from "./layout";
import { AsyncDemo } from "./async-demo";
import { DataGridDemo } from "./data-grid-demo";
import { hot } from "react-hot-loader/root";



class MainPage extends React.Component {

    private sideLinks: Array<ILayoutLink>

    constructor(props: {}) {
        super(props);
        this.state = {};

        this.sideLinks = [
            { name: "Async demo", route: "/" },
            { name: "Datagrid demo", route: "/data-grid" }
        ];
    }

    render() {

        return (
            <BrowserRouter >
                <Layout title="React template" links={this.sideLinks}>
                    <Switch>
                        <Route path="/data-grid" component={DataGridDemo} />
                        <Route path="/" render={() => <AsyncDemo title="Async Demo 1" delay={2000} />} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }


}

export default hot(MainPage);