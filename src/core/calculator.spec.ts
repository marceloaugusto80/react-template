import { Calculator } from "./calculator";

describe("Calculator", function(){


    it("sum return sum of two numbers", function(){
        
        let expected = 10;

        let actual = new Calculator().sum(5, 5);
        
        expect(actual).toEqual(expected);
    });
    


    it("sumAsync return sum of two numbers", async function(){
        
        let expected = 10;

        let actual = await new Calculator().sumAsync(5, 5);
        
        expect(actual).toEqual(expected);
    });



}); // end describe calculator