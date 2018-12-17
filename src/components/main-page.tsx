import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Layout, ILayoutLink } from "./layout";
import { AsyncDemo } from "./async-demo";
import { DataGridDemo } from "./data-grid-demo";


interface MainPageState{

}

export class MainPage extends React.Component<{}, MainPageState> {

    private sideLinks: Array<ILayoutLink>

    constructor(props: {}) {
        super(props);
        this.state = {};

        this.sideLinks = [
            { name: "Async demo", route: "/"  },
            { name: "Datagrid demo", route: "/data-grid"  }
        ];
    }

    

    render() {

        return (
            <BrowserRouter >
                <Layout title="React template" links={this.sideLinks}>
                    <Route exact path="/"  component={ ()=> <AsyncDemo title="Async Demo 1" delay={2000}/> } />
                    <Route exact path="/data-grid"  component={ ()=> <DataGridDemo/> }  />
                </Layout>
            </BrowserRouter>


        );
    }


}