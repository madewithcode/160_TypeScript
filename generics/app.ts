// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo('Max'));
console.log(echo(27));
console.log(echo({name: 'Max', age: 27}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('Max').length);
console.log(betterEcho(27)); // inferred to be a number
console.log(betterEcho<number>(27)); // explicitly a number
console.log(betterEcho({name: 'Max', age: 27}));

// Built-in Generics.  Array is a generic type by default.
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(['Apple', 'Orange']);

// Generic Types
// anything after the ':' and before the '=' is type
// echo2 will hold a function
// where the input argument 'data' is of type T
// and all this function will do
// it will return something of the same input type T
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2('Something'));
console.log(echo2<string>('Another Something'));

// Non Generic Class
class SimpleMath {
    baseValue;
    multiplyValue;
    calculate() {
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());



// Generic Class
class SimpleMathG<T extends number | string, U extends number | string> {
    baseValue: T; // number or string
    multiplyValue: U; // number or string
    calculate(): number {
        // '+' simply casts to a number
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMathG = new SimpleMathG<string, number>();
simpleMathG.baseValue = '10';
simpleMathG.multiplyValue = 20;
console.log(simpleMathG.calculate())