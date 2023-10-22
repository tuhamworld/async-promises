class MathHelper{
 
    add(num1, num2) {
        return num1 + num2
    }

    div(num1, num2) {
        return num1 / num2
    }

    multiply(num1, num2) {
        return num1 * num2
    }

    subtract(num1, num2) {
        return num1 * num2
    }

}

const mathHelper = new MathHelper()
const res = mathHelper.div(500, 50)

console.log(res)