interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anna';
}

const person: NamedPerson = {
    firstName: 'Max',
    hobbies: ['Cooking', 'Sports'],
    age: 30,
    greet(lastName: string) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName)
    }
};

changeName(person);
greet(person);
person.greet('Anything');


class Person implements NamedPerson {
    firstName: string;
    hobbies2: string;
    greet(lastName: string) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
        console.log('My hobbies2: ' + this.hobbies2);
    }
}

const myPerson = new Person();
myPerson.firstName = 'John';
myPerson.hobbies2 = 'Music';
greet(myPerson);

myPerson.greet('Smith');


// Function Types

interface DoubleFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunc: DoubleFunc;

myDoubleFunc = function (x: number, y: number) {
    return (x + y) * 2;
};

console.log(myDoubleFunc(10,20));


// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const gloria: AgedPerson = {
    age: 100,
    firstName: 'Gloria',
    greet(lastName: string) {
        console.log('Hello, ' + this.firstName + ' ' + lastName);
    }
};

gloria.greet('Stuart');