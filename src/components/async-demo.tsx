import * as React from "react";
import { Calculator} from "../core/calculator";
import { Button, Header, Container, Input, Message } from "semantic-ui-react";


export interface AsyncDemoProps{
    title: string;
    delay: number;
}

interface AsyncDemoState{
    valueA: number;
    valueB: number;
    result: number;
    isCalculating: boolean;
}

export class AsyncDemo extends React.Component<AsyncDemoProps, AsyncDemoState>{

    constructor(props: AsyncDemoProps){
        super(props);
        this.state = { valueA: 0, valueB: 0, result: 0, isCalculating: false};
    }


    async showMessage(e: Event){
        
        let calc = new Calculator();
        
        this.setState({isCalculating: true});
        
        let sum = await calc.sumAsync(this.state.valueA, this.state.valueB, this.props.delay);
        
        this.setState({result: sum});

        this.setState({isCalculating: false});
        
    }

    onInputChangeA(e: React.FormEvent<HTMLInputElement>){
        this.setState({valueA: parseInt(e.currentTarget.value)});
    }

    onInputChangeB(e: React.FormEvent<HTMLInputElement>){
        this.setState({valueB: parseInt(e.currentTarget.value)});
    }


    render(){

        return(
            <Container>
                
                <Header>{this.props.title}</Header>
                <p>Current async delay is { this.props.delay / 1000 } secs.</p>
                
                <Input 
                    placeholder="Value A..." 
                    value={this.state.valueA} 
                    onChange={this.onInputChangeA.bind(this)}/>
                
                <span> + </span>
                
                <Input 
                    placeholder="Value B..."
                    value={this.state.valueB} 
                    onChange={this.onInputChangeB.bind(this)}/>
                <Button 
                    primary
                    loading={this.state.isCalculating}
                    disabled={this.state.isCalculating} 
                    onClick={this.showMessage.bind(this)}>
                        { this.state.isCalculating ? "Wait..." : "Click here to sum"}
                </Button>
                
                <Message>
                    <Message.Header>Result</Message.Header>
                    <p>{this.state.result}</p>
                </Message>
            
            </Container>
        );

    }

}