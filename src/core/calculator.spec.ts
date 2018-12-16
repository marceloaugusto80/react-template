import {expect } from "chai";
import "mocha";
import { Calculator } from "./calculator";

describe("Calculator", function(){


    it("sum return sum of two numbers", function(){
        
        let expected = 10;

        let actual = new Calculator().sum(5, 5);
        
        expect(actual).to.be.eq(expected);
    });
    


    it("sumAsync return sum of two numbers", async function(){
        
        let expected = 10;

        let actual = await new Calculator().sumAsync(5, 5);
        
        expect(actual).to.be.eq(expected);
    });



}); // end describe calculator