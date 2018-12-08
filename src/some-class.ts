export class SomeClass {
    
    constructor(public foo:string){
        this.foo = foo;
    }

    getTwoFoos() {
        return this.foo + this.foo;
    }
}
