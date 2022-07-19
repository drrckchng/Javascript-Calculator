// Initial action plan...
// Have each user input stored into an array
// Evaluate first 3 elements of array and pop
// push() evaluated 0-2 indexes of the array to front
// repeat until...
// last 3 elements of array
// evaluate and display result

// Upon clicking on "=" will call upon operate() function

// Things to keep in mind...
// User input validity. Need to make sure that users will press "number, operator, number"
// Add functionality to prevent user from overwriting an existing var
// If they wish to overwrite alert user to use clear button
//         or simply alert them with a universal error (red screen/screen shake/err msg)
// Additionally: need to verify user has inputed 2 numbers and operator before pressing "="

const testExpression = [3, "add", 2, "add", 3];

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a, operator, b) {
    if(operator == "add") {
        return add(a,b);
    } else if(operator == "subtract") {
        return subtract(a,b);
    } else if(operator == "multiply") {
        return multiply(a,b);
    } else if(operator == "divide") {
        return divide(a,b);
    }
}

function calculate(inputArray) {
    let total = 0;
    while(inputArray.length >= 3) {
        total = operate(inputArray[0], inputArray[1], inputArray[2]);
        inputArray.splice(0,3);
        inputArray.unshift(total);
    }
    return total;
}

calculate(testExpression)
//console.log(operate(testExpression[0], testExpression[1], testExpression[2]));