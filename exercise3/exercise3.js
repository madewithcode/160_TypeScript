var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 1. Class
var Car = (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log('Tooooooooot');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// 2. Inheritance
var BaseObject = (function () {
    function BaseObject(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        _super.call(this, width, length);
        this.width = width;
        this.length = length;
        calcSize();
        number;
        {
            return this.width * this.length;
        }
    }
    return Rectangle;
}(BaseObject));
var myRectangle = new Rectangle(5, 4);
console.log(myRectangle.calcSize());
// 3. Setter and Getter
var Person = (function () {
    function Person() {
        this._firstName = '_';
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fn) {
            if (fn.length > 3) {
                this._firstName = fn;
            }
            else {
                this._firstName = '_';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var myPerson = new Person();
console.log(myPerson.firstName);
myPerson.firstName = 'Ma';
console.log(myPerson.firstName);
myPerson.firstName = 'Maximilian';
console.log(myPerson.firstName);
//# sourceMappingURL=exercise3.js.map