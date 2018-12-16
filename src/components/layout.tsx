import * as React from "react";

export interface LayoutProps{
    title:string;
}



export class Layout extends React.Component<LayoutProps, {}>{

    constructor(props:LayoutProps){
        super(props);
    }
    

    render(){
        return (<div>
            <h1>{this.props.title}</h1>
            <div>
                {this.props.children}
            </div>
        </div>);
    }
}