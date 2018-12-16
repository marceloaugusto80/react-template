import * as React from "react";
import { Calculator} from "../core/calculator";


interface AsyncDemoProps{
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
            <div>
                
                <p>{this.props.title}</p>
                <p>Current async delay is { this.props.delay / 1000 } secs.</p>
                
                <label>Value A: </label>
                <input 
                    type="text" 
                    value={this.state.valueA} 
                    onChange={this.onInputChangeA.bind(this)}/>
                
                <label>Value B: </label>
                <input 
                    type="text" 
                    value={this.state.valueB} 
                    onChange={this.onInputChangeB.bind(this)}/>
                
                <button 
                    disabled={this.state.isCalculating} 
                    onClick={this.showMessage.bind(this)}>
                        { this.state.isCalculating ? "Wait..." : "Click here to sum"}
                </button>
                
                <p>
                    <span>Result: </span>{this.state.result}
                </p>
            
            </div>
        );

    }

}