import * as React from "react";
import { Calculator } from "../core/calculator";

export interface AsyncDemoProps {
    delay: number;
}

interface AsyncDemoState {
    valueA: number;
    valueB: number;
    result: number;
    isCalculating: boolean;
}

export class AsyncDemo extends React.Component<AsyncDemoProps, AsyncDemoState>{

    constructor(props: AsyncDemoProps) {
        super(props);
        this.state = { valueA: 0, valueB: 0, result: 0, isCalculating: false };
    }


    showMessage = async () => {

        let calc = new Calculator();

        this.setState({ isCalculating: true });

        let sum = await calc.sumAsync(this.state.valueA, this.state.valueB, this.props.delay);

        this.setState({ result: sum });

        this.setState({ isCalculating: false });

    }

    onInputChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ valueA: parseInt(e.currentTarget.value) });
    }

    onInputChangeB = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ valueB: parseInt(e.currentTarget.value) });
    }


    render() {

        return (
            <div>
                <div>
                    <div className="view-title">Calculate async</div>
                    <p >Current async delay is {this.props.delay / 1000} secs.</p>
                </div>
                <div>
                    <input type="number" placeholder="Value A..." value={this.state.valueA} onChange={this.onInputChangeA} />
                    <span>+</span>
                    <input type="number" placeholder="Value B..." value={this.state.valueB} onChange={this.onInputChangeB} />
                    <button onClick={this.showMessage} disabled={this.state.isCalculating}>Click here to sum</button>
                </div>
                <div>
                    <span>Result: </span>
                    <span>
                        {this.state.isCalculating ? "Wait for async calculation..." : this.state.result}
                    </span>
                </div>
            </div>
        );

    }

}