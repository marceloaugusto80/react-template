export class SomeClass {
    
    constructor(public foo:string){
        this.foo = foo;
    }

    GetTwoFoos() {
        return this.foo + this.foo;
    }
}