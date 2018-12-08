import * as React from "react";
import {SomeClass} from "../some-class";

export interface LayoutProps{
    title:string;
}

export interface LayoutState {
    message:string;
}


export class Layout extends React.Component<LayoutProps, LayoutState>{

    constructor(props:LayoutProps){
        super(props);
        this.state = {message: ""};
    }

    showMessage(e: Event){
        let delay = 2000;
        this.setState({message: `wait ${delay / 1000} seconds...`})
        let someClass = new SomeClass("Hurray! ");
        someClass.getTwoFoosAsync(delay)
            .then((value)=>{
                this.setState({message: value + "Async worked!"});
            })
            .catch((error)=>{
                this.setState({message: "well... something went wrong"});
            });
        
    }

    render(){
        return (<div>
            <h1>{this.props.title}</h1>
            <p>Click below to call async function:</p>
            <button onClick={this.showMessage.bind(this)}>Click me, plese</button>
            <p>{this.state.message}</p>
        </div>);
    }
}