import React, {Fragment, PureComponent} from "react";
import styled from "styled-components";
import { Calculator } from "../core/calculator";
import CalculatorImg from "../resources/images/calculator-64x64.png";

export interface AsyncDemoProps {
    delay: number;
}

interface AsyncDemoState {
    valueA: number;
    valueB: number;
    result: number;
    isCalculating: boolean;
}

export class AsyncDemo extends PureComponent<AsyncDemoProps, AsyncDemoState>{

    constructor(props: AsyncDemoProps) {
        super(props);
        this.state = { valueA: 0, valueB: 0, result: 0, isCalculating: false };
    }


    handleCalculateClick = async () => {
        this.setState({ isCalculating: true });
        const calc = new Calculator();
        const sum = await calc.sumAsync(this.state.valueA, this.state.valueB, this.props.delay);
        this.setState({ result: sum });
        this.setState({ isCalculating: false });
    }

    handleInputA = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ valueA: parseInt(e.currentTarget.value) });
    }

    handleInputB = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ valueB: parseInt(e.currentTarget.value) });
    }

    render() {

        return (
            <Fragment>
                <Title>
                    <img src={CalculatorImg} alt=""/>
                    <h2>Calculate async</h2>
                </Title>
                <p>Current async delay is {this.props.delay / 1000} secs.</p>
                <div>
                    <Input 
                        type="number" 
                        placeholder="Value A..." 
                        value={this.state.valueA} 
                        onChange={this.handleInputA} />
                    <span> + </span>
                    <Input 
                        type="number" 
                        placeholder="Value B..." 
                        value={this.state.valueB} 
                        onChange={this.handleInputB} />
                    <Button 
                        onClick={this.handleCalculateClick} 
                        disabled={this.state.isCalculating}>Click here to sum</Button>
                </div>
                <div>
                    <span>Result: </span>
                    <span>
                        {this.state.isCalculating ? "Wait for async calculation..." : this.state.result}
                    </span>
                </div>
            </Fragment>
        );
    }
}

const Title = styled.div`
    display: flex;
    flex-flow: row nowrap;
    column-gap: 8px;
`;

const Input = styled.input`
    width: 50px;
    font: inherit;
`;

const Button = styled.button`
    font: inherit;
`;