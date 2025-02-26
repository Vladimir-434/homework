// ====================1========================
function logHello(logHello) {
    console.log(logHello)
}
logHello('Hello')
// ====================2============================
const numbers = [2, 4, 8, 16]
function sum(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (i <= numbers) {
            return `привет ${numbers}`
        }
    }
    return 'пока'
}
console.log(sum(numbers, 16))

//===================================3=======================================

function sum(onceNumber, twoNumber, logText) {
    return onceNumber + twoNumber + logText
}
const result = sum(1, 5, ' Text')
console.log(result)

function twoSum(onceNumber, twoNumber, logText) {
    return onceNumber - twoNumber - logText
}
const twoResult = twoSum(10, 55, +'100')
console.log(twoResult)

function threeSum(onceNumber, twoNumber, logText) {
    return onceNumber * twoNumber + logText
}
const threeResult = threeSum(10, 55, '   100')
console.log(threeResult)

function fourSum(onceNumber, twoNumber, logText) {
    return onceNumber / twoNumber + logText
}
const fourResult = fourSum(10, 5, '  hello')
console.log(fourResult)