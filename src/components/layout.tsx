import * as React from "react";
import { Container } from "semantic-ui-react";


export interface LayoutProps{
    title:string;
}



export class Layout extends React.Component<LayoutProps, {}>{

    constructor(props:LayoutProps){
        super(props);
    }
    

    render(){
        return (
        <Container>
            <h1>{this.props.title}</h1>
            <div>
                {this.props.children}
            </div>
        </Container>
        );
    }
}