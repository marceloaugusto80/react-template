import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
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
                <div>
                    <Layout title="React template" links={this.sideLinks}>
                        <Switch>
                            <Route exact path="/data-grid"  component={ DataGridDemo }  />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>


        );
    }


}