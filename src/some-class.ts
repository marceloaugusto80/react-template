export class SomeClass {
    
    constructor(public foo:string){
        this.foo = foo;
    }

    getTwoFoos() {
        return this.foo + this.foo;
    }

    async getTwoFoosAsync(delay: number = 0) {
        return new Promise<string>(resolve=>{
            setTimeout(() => {
                resolve(this.getTwoFoos());
            }, delay); 
        });
    }
}
