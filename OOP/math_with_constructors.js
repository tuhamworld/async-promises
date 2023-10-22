//  Math with constructor


class MathHelper {

    constructor(num1, num2, instanceName) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("Arguments is not a number")
        }

        this.num1 = num1;
        this.num2 = num2;
        this.instanceName = `This is a ${instanceName}`
    }

    add() {
        console.log(`Adding ${this.num1} and ${this.num2} together..`);
        return this.num1 + this.num2
    }

    sub() {
        console.log(`Subtracting ${this.num1} and ${this.num2} together..`);
        return this.num1 - this.num2
    }

    div() {
        console.log(`Dividing ${this.num1} and ${this.num2} together..`);
        return this.num1 / this.num2
    }

    multiply() {
        console.log(`Multiplying ${this.num1} and ${this.num2} together..`);
        return this.num1 * this.num2
    }


}


const mathHelper = new MathHelper(60, 45, "Math 1 instance")
const mathHelper2 = new MathHelper(60, 45, "Math 2 instance")


console.log(mathHelper.add())
console.log(mathHelper.sub())
console.log(mathHelper.multiply())
console.log(mathHelper.div())

console.log(mathHelper.instanceName)
console.log(mathHelper2.instanceName)