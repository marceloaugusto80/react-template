import React, { Fragment, ChangeEvent, useState } from "react";
import styled from "styled-components";
import { ExampleLogic } from "@/features/example1/services/ExampleLogic";
import CalculatorImg from "./resources/calculator-64x64.png";

export function ExamplePage1() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [result, setResult] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculateClick = async () => {
    setIsCalculating(true);

    try {
      const logic = new ExampleLogic();
      const sum = await logic.sumAsync(valueA, valueB, 3000);
      setResult(sum);
    } catch (e) {
      console.log(`Error occurred: ${(e as Error).message}`);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleInputAChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setValueA(parseInt(e.currentTarget.value));
  };

  const handleInputBChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setValueB(parseInt(e.currentTarget.value));
  };

  return (
    <Fragment>
      <h1>Example page 1</h1>
      <Header>
        <img src={CalculatorImg} alt="" />
        <h2>Calculate async</h2>
      </Header>
      <Controls>
        <Input
          type="number"
          placeholder="Value A..."
          value={valueA}
          onChange={handleInputAChanged}
        />
        <span> + </span>
        <Input
          type="number"
          placeholder="Value B..."
          value={valueB}
          onChange={handleInputBChanged}
        />
        <Button onClick={handleCalculateClick} disabled={isCalculating}>
          Click here to sum
        </Button>
      </Controls>
      <div>
        <strong>Result: </strong>
        <span>{isCalculating ? "Wait for async calculation..." : result}</span>
      </div>
    </Fragment>
  );
}

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 8px;
`;

const Controls = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  width: 50px;
  font: inherit;
`;

const Button = styled.button`
  font: inherit;
`;
