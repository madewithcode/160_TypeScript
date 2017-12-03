/**
 * Created by Vinay on 12/2/17.
 */

namespace MyMath {

    // namespace inside namespace
    export namespace Circle {
        const PI = 3.14;

        export function calculateCircumference(diameter: number) {
            return diameter * PI;
        }
    }
}