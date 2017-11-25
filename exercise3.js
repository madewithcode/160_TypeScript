// 1. Class
class Car {
    constructor(name, acceleration = 0) {
        this.name = name;
        this.acceleration = acceleration;
        this.name = name;
        this.acceleration = acceleration;
    }
    honk() {
        console.log('Tooooooooot');
    }
    accelerate(speed) {
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
    constructor(width = 0, length = 0) {
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends BaseObject {
    constructor(width, length) {
        super(width, length);
        this.width = width;
        this.length = length;
        calcSize();
        number;
        {
            return this.width * this.length;
        }
    }
}
let myRectangle = new Rectangle(5, 4);
console.log(myRectangle.calcSize());
// 3. Setter and Getter
class Person {
    constructor() {
        this._firstName = '_';
    }
    set firstName(fn) {
        if (fn.length > 3) {
            this._firstName = fn;
        }
        else {
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
//# sourceMappingURL=exercise3.js.map