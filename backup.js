/* BASICS */
let myName = 'Vinay';
let myAge = 27;
function sayHello() {
    console.log('Hello');
}
function multiply(value1, value2) {
    return value1 * value2;
}
let myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 5));
let userData = {
    name: 'Vinay',
    age: 27
};
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
let myRealAge = 27;
myRealAge = '30';
/* ARROW FUNCTIONS */
console.log('arrow functions');
const addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(2, 3));
const multiplyNumbers = (num1, num2) => num1 * num2;
const greet = () => {
    console.log('hello');
};
const greetFriend = friend => {
    console.log(friend);
};
/* DEFAULT PARAMETERS */
console.log('Default Parameters');
const countdown = (start = 20) => {
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Rest & Spread
// Spread
const numbers = [1, 10, 99];
console.log(Math.max(...numbers));
// Rest
function makeArray(...args) {
    return args;
}
console.log(makeArray(1, 2));
// destructuring
const myHobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);
const userData = {
    userName: 'John',
    age: 27
};
const { userName, age } = userData;
console.log(userName, age);
const { userName: myName, age: myAge } = userData;
console.log(myName, myAge);
// template literals
const userName2 = 'Joe';
const greeting = `This is a heading! I'm ${userName2}.
This should be on the next line`;
console.log(greeting);
/* CLASSES */
class Person {
    // 'public username' is shorthan for creating a class property
    // and saying this.username = username
    constructor(name, username) {
        this.username = username;
        this.age = 30;
        this.name = name;
        // the following is implicitly there with the shorthand above
        // this.username = username
    }
    printAge() {
        console.log(this.age);
        this.setType('student');
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person('john', 'johndoe');
person.printAge();
console.log(person);
/* INHERITANCE */
class Vinay extends Person {
    constructor(username) {
        super('Vinay', username);
        this.age = 31;
    }
}
const vinay = new Vinay('vinay');
console.log(vinay);
/* GETTERS & SETTERS */
class Plant {
    constructor() {
        this._species = 'Default';
    }
    set species(value) {
        if (value.length > 4) {
            this._species = value;
        }
        else {
            this._species = 'Default';
        }
    }
    get species() {
        return this._species;
    }
}
let plant = new Plant();
console.log(plant.species); // calls the get function
plant.species = 'Bamboo'; // calls the set function
console.log(plant.species);
/* STATIC PROPERTIES & METHODS */
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
/* ABSTRACT CLASS */
// cannnot instanticate directly
// must be inherited from.
// abstract class 'may be' a typescript 2.0 thing
/*
abstract class Project {
    projectName:string = 'Default';
    budget:number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('TypeScript 101');
console.log(newProject);
*/
// private constructors
// singleton example
// requires typescript 2.0
/*
class OnlyOne {
    private static instance: OnlyOne;
    // readonly is like having only a getter, no setter
    public readonly name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance
    }
}

let wrong = new OnlyOne('The Wrong One');
let right = OnlyOne.getInstance();

right.name = 'Something else'; // error because name is readonly

console.log(wrong);
console.log(right);
*/
//# sourceMappingURL=backup.js.map