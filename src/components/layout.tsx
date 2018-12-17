import * as React from "react";
import { Container, Grid } from "semantic-ui-react";
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
            return <li key={i}><Link to={el.route}>{el.name}</Link></li>
        });
    }
    
    render(){
        return (
        <Container>
            <h1>{this.props.title}</h1>
            <Grid columns={2}>
                <Grid.Column>
                    <ul>{this.renderLinks()}</ul>
                </Grid.Column>
                <Grid.Column>
                    {this.props.children}
                </Grid.Column>
            </Grid>
        </Container>
        );
    }
}