// Math with no constructor

class MathHelper{
 
    add(num1, num2) {
        return num1 + num2
    }

    div(num1, num2) {
        return num1 / num2
    }

    multiply(num1, num2) {
        console.log(`Multiplying ${num1} and ${num2} together...`)
        return num1 * num2
    }

    subtract(num1, num2) {
        return num1 - num2
    }

}

const mathHelper = new MathHelper()
const newMathHelper = new MathHelper()

const resDiv = mathHelper.div(500, 50)
const resAdd = mathHelper.add(300, 250)
const resSub = mathHelper.subtract(900, 450)


let resMultiply = newMathHelper.multiply(65, 3)


// console.log(resDiv)
// console.log(resAdd)
// console.log(resSub)
console.log(resMultiply)