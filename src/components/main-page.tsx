import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Layout, ILayoutLink } from "./layout";
import { AsyncDemo } from "./async-demo";


interface MainPageState{

}

export class MainPage extends React.Component<{}, MainPageState> {

    private sideLinks: Array<ILayoutLink>

    constructor(props: {}) {
        super(props);
        this.state = {};

        this.sideLinks = [
            { name: "Async demo 1", route: "/"  },
            { name: "Async demo 2", route: "/a" },
            { name: "Async demo 3", route: "/b" }
        ];
    }



    render() {

        return (
            <BrowserRouter >
                <Layout title="React template" links={this.sideLinks}>
                    <Route exact path="/"  component={ ()=> <AsyncDemo title="Async Demo 1" delay={2000}/> } />
                    <Route exact path="/a" component={ ()=> <AsyncDemo title="Async Demo 2" delay={1000}/> } />
                    <Route exact path="/b" component={ ()=> <AsyncDemo title="Async Demo 3" delay={500} /> } />
                </Layout>
            </BrowserRouter>


        );
    }


}