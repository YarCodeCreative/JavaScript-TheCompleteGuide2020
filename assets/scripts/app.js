const defaultResult = 0;
let currentResult = 0;

// a function does not need to end with a semi-colon
function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is ' + result);
} 

add(1, 2);

currentResult = currentResult + 10 * 3;

let calculationDescription = `(${defaultResult} + 10 * 57)`;
let errorMessage = 'An error has occured.'

outputResult(currentResult, calculationDescription);
