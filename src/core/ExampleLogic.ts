export class ExampleLogic {
    
    sum(a: number, b: number) {
        return a + b;
    }

    async sumAsync(a: number, b: number, delay: number = 0) {
        return new Promise<number>(resolve=>{
            setTimeout(() => {
                resolve(this.sum(a, b));
            }, delay); 
        });
    }
}
