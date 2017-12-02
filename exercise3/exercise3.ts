// 1. Class
class Car {

    constructor(public name: string, public acceleration: number = 0) {
        this.name = name;
        this.acceleration = acceleration;
    }

    honk() {
        console.log('Tooooooooot');
    }

    accelerate(speed: number) {
        this.acceleration += speed;
    }
}

let car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// 2. Inheritance
class BaseObject {
    constructor(public width: number = 0, public length: number = 0) {}
}

class Rectangle extends BaseObject {
    constructor(public width: number, public length: number) {
        super(width, length);

    calcSize(): number {
        return this.width * this.length;
    }
}

let myRectangle = new Rectangle(5, 4);
console.log(myRectangle.calcSize());


// 3. Setter and Getter
class Person {
    private _firstName: string = '_';

    set firstName(fn: string) {
        if (fn.length > 3) {
            this._firstName = fn;
        } else {
            this._firstName = '_';
        }
    }

    get firstName() {
        return this._firstName;
    }
}

let myPerson = new Person();
console.log(myPerson.firstName);

myPerson.firstName = 'Ma';
console.log(myPerson.firstName);

myPerson.firstName = 'Maximilian';
console.log(myPerson.firstName);