// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
// let arrayOfNumbers = [1, 15, 50, 10, -190];
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     sum += arrayOfNumbers[i];
// }
// console.log(sum);

function sumOfNumbers(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    // console.log(sum);
    return sum;
}
// sumOfNumbers(arrayOfNumbers);
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 *
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
// const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function countEvenNumbers(arrayOfNumbers) {
    let evenNumber = [];
    // for (let index = 0; index < arrayOfNumbers.length; index++) {
    //     if (arrayOfNumbers[index] % 2 === 0) {
    //         evenNumber++;
    //         console.log(evenNumber);
    //     }
    // }
    // return evenNumber.length;
    for (let index = 0; index <= arrayOfNumbers.length; index++) {
        if (arrayOfNumbers[index] % 2 === 0) {
            const newValue = arrayOfNumbers[index];
            evenNumber.push(newValue);
            // console.log(evenNumber);
        }
        // arrayOfNumbers[index] % 2 === 0;
        // console.log(evenNumber);
    }
    // return evenNumber.length;
    return evenNumber.length;

    // const even = arrayOfNumbers.filter((number) => {
    //     return number % 2 === 0;
    // });
    // return evenNumber.length;
    // return arrayOfNumbers.length;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = arr.filter((number) => {
//     return number % 2 === 0;
// });

// console.log(even); // 👉️ [2, 4, 6, 8]

assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
