import {expect } from "chai";
import "mocha";
import { SomeClass } from "./some-class";

describe("SomeClass", function(){

    it("GetTwoFoos return 2 foos", function(){
        
        let expected = "barbar";

        let actual = new SomeClass("bar").getTwoFoos();
        
        expect(actual).to.be.eq(expected);
    });
    
    it("GetTwoFoosAsync return 2 foos", async function(){
        
        let expected = "barbar";

        let actual = await new SomeClass("bar").getTwoFoosAsync();
        
        expect(actual).to.be.eq(expected);
    });

});