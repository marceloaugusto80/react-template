import React, { Fragment, ChangeEvent, useState } from "react";
import styled from "styled-components";
import { ExampleLogic } from "@/core/ExampleLogic";
import CalculatorImg from "@/resources/images/calculator-64x64.png";


/**
 * Example functional component.
 */
export function ExamplePage1() {

    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [result, setResult] = useState(0);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleCalculateClick = async () => {
        setIsCalculating(true);

        try{
            const logic = new ExampleLogic();
            const sum = await logic.sumAsync(this.state.valueA, this.state.valueB, 3000);
            setResult(sum);
        }
        catch(e) {
            console.log(`Error occurred: ${(e as Error).message}`);
        }
        finally {
            setIsCalculating(false);
        }
    }

    const handleInputAChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setValueA(parseInt(e.currentTarget.value));
    }

    const handleInputBChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setValueB(parseInt(e.currentTarget.value));
    }

    return (
        <Fragment>
            <h1>Example page 1</h1>
            <Title>
                <img src={CalculatorImg} alt="" />
                <h2>Calculate async</h2>
            </Title>
            <div>
                <Input
                    type="number"
                    placeholder="Value A..."
                    value={valueA}
                    onChange={handleInputAChanged} />
                <span> + </span>
                <Input
                    type="number"
                    placeholder="Value B..."
                    value={valueB}
                    onChange={handleInputBChanged} />
                <Button
                    onClick={handleCalculateClick}
                    disabled={isCalculating}>Click here to sum</Button>
            </div>
            <div>
                <span>Result: </span>
                <span>
                    {isCalculating ? "Wait for async calculation..." : result}
                </span>
            </div>
        </Fragment>
    );
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