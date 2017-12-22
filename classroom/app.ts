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
    greet(lastName: string) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName)
    }
};

changeName(person);
greet(person);
person.greet('Anything');
