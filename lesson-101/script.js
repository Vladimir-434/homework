// ====================1========================
function logHello(logHello) {
    console.log(logHello)
}
logHello('Hello')
// ====================2============================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function myFunction(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}
myFunction(numbers)

//===================================3=======================================

const calc = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
    }
}

console.log(calc(1, 2, '+'));
console.log(calc(5, 7, '*'));
console.log(calc(81, 9, '/'));
console.log(calc(5, 17, '-'));
