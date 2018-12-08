import {expect } from "chai";
import "mocha";
import { SomeClass } from "./some-class";

describe("SomeClass", function(){

    it("GetTwoFoos return 2 foos", function(){
        
        let expected = "barbar";

        let actual = new SomeClass("bar").GetTwoFoos();
        
        expect(actual).to.be.eq(expected);
    });
    
});