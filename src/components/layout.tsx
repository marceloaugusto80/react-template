import * as React from "react";
import { Grid, Segment, List, Rail } from "semantic-ui-react";
import { Link } from "react-router-dom";


export interface ILayoutLink{
    route: string;
    name: string;
}


export interface LayoutProps{
    title:string;
    links: Array<ILayoutLink>;
}


export class Layout extends React.Component<LayoutProps, {}>{


    constructor(props:LayoutProps){
        super(props);
    }

    renderLinks(){
        return this.props.links.map((el, i)=>{
            return <List.Item key={i}><Link to={el.route}>{el.name}</Link></List.Item>
        });
    }

    render(){
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Segment>
                        {this.props.children}
                        <Rail position="left">
                            <h1>{this.props.title}</h1>
                            <List>
                                {this.renderLinks()}
                            </List>
                        </Rail>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}