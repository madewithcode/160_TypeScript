/* BASICS */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myName = 'Vinay';
var myAge = 27;
function sayHello() {
    console.log('Hello');
}
function multiply(value1, value2) {
    return value1 * value2;
}
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 5));
var userData = {
    name: 'Vinay',
    age: 27
};
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
var myRealAge = 27;
myRealAge = '30';
/* ARROW FUNCTIONS */
console.log('arrow functions');
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(2, 3));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
var greet = function () {
    console.log('hello');
};
var greetFriend = function (friend) {
    console.log(friend);
};
/* DEFAULT PARAMETERS */
console.log('Default Parameters');
var countdown = function (start) {
    if (start === void 0) { start = 20; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Rest & Spread
// Spread
var numbers = [1, 10, 99];
console.log(Math.max.apply(Math, numbers));
// Rest
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
// destructuring
var myHobbies = ['Cooking', 'Sports'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = {
    userName: 'John',
    age: 27
};
var userName = userData.userName, age = userData.age;
console.log(userName, age);
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
// template literals
var userName2 = 'Joe';
var greeting = "This is a heading! I'm " + userName2 + ".\nThis should be on the next line";
console.log(greeting);
/* CLASSES */
var Person = (function () {
    // 'public username' is shorthan for creating a class property
    // and saying this.username = username
    function Person(name, username) {
        this.username = username;
        this.age = 30;
        this.name = name;
        // the following is implicitly there with the shorthand above
        // this.username = username
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('student');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('john', 'johndoe');
person.printAge();
console.log(person);
/* INHERITANCE */
var Vinay = (function (_super) {
    __extends(Vinay, _super);
    function Vinay(username) {
        _super.call(this, 'Vinay', username);
        this.age = 31;
    }
    return Vinay;
}(Person));
var vinay = new Vinay('vinay');
console.log(vinay);
/* GETTERS & SETTERS */
var Plant = (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 4) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // calls the get function
plant.species = 'Bamboo'; // calls the set function
console.log(plant.species);
/* STATIC PROPERTIES & METHODS */
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
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