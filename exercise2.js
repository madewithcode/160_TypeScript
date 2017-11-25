// 1. arrow function
var double = function (value) { return value * 2; };
console.log(double(10));
console.log('----------------------');
// 2. default values
var greet = function (name) {
    if (name === void 0) { name = 'John'; }
    return console.log('Hello, ' + name);
};
greet();
greet('Vinay');
console.log('----------------------');
// 3. rest & spread
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log('----------------------');
// 4. rest & spread
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
console.log('----------------------');
// 5. a well constructed array
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
console.log('----------------------');
//6. a well constructed object
var scientist = {
    firstName: 'Will',
    experience: 12
};
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
console.log('----------------------');
//# sourceMappingURL=exercise2.js.map