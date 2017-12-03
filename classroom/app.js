/**
 * Created by Vinay on 12/2/17.
 */
var MyMath;
(function (MyMath) {
    // namespace inside namespace
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
/**
 * Created by Vinay on 12/2/17.
 */
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>
var CircleMath = MyMath.Circle;
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 30));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);
