console.log('decorators');


// a decorator, is just a function
// which gets an argument that is the constructor
// needs to be constructor if the decorator
// will be attached to a class
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

// the function becomes a decorator
// when used with a @ symbol before something
@logged
class Person {
    constructor() {
      console.log('hi');
    }

}

// Factory (returns a decorator)
function logging(value: boolean) {
    return value ? logged : null;
}

// @logging is not a decorator
// calling the 'logging' function, returns a decorator
@logging(true)
class Car1 {

}

// nothing is shown on console because
// logging function returns a 'null'
@logging(false)
class Car2 {

}

// More Useful Decorator
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

// Multiple Decorators
@logging(true)
@printable
class Plant {
    name = 'Green Plant';
}

const plant = new Plant();
(<any>plant).print();


// Method Decorator
// and Property Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    // makes the function non-editable
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();

// does not take effect because
// we have made calcBudget non editable
project.calcBudget = function(){
    console.log(2000);
};

project.calcBudget();

console.log(project);


// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('target: ', target);
    console.log('methodName: ', methodName);
    console.log('pararmIndex: ', paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);


























