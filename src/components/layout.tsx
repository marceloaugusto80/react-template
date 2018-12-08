import * as React from "react";

export interface LayoutProps{
    title:string;
}


export class Layout extends React.Component<LayoutProps, {}>{
    render(){
        return (<div>
            <h1>{this.props.title}</h1>
        </div>);
    }
}