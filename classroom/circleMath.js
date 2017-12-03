/**
 * Created by Vinay on 12/2/17.
 */
var MyMath;
(function (MyMath) {
    // namespace inside namespace
    var Circle;
    (function (Circle) {
        const PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
//# sourceMappingURL=circleMath.js.map