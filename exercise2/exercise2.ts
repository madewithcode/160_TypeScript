// 1. arrow function
const double = (value: number) => value * 2;
console.log(double(10));
console.log('----------------------');

// 2. default values
const greet = (name: string = 'John'): void => console.log('Hello, ' + name);
greet();
greet('Vinay');
console.log('----------------------');

// 3. rest & spread
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
console.log('----------------------');

// 4. rest & spread
var newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);
console.log('----------------------');

// 5. a well constructed array
var testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
console.log('----------------------');

//6. a well constructed object
let scientist = {
    firstName: 'Will',
    experience: 12
};
var {firstName, experience} = scientist;
console.log(firstName, experience);
console.log('----------------------');