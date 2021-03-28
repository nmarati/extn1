enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}
namespace customextn {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 6
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo1(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 15
     */
    //% block
    export function test(value: number): number {
        return value <= 1 ? value : test(value -1) + test(value - 2);
    }
}
