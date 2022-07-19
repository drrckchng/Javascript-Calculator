// Initial action plan
// Add 3 vars that will store user input (num1, num2, operator)
// Or possibly having each input in an array.

// Upon clicking on "=" will call upon operate() function

// Things to keep in mind...
// User input validity. Need to make sure that users will press "number, operator, number"
// Add functionality to prevent user from overwriting an existing var
// If they wish to overwrite alert user to use clear button
//         or simply alert them with a universal error (red screen/screen shake/err msg)
// Additionally: need to verify user has inputed 2 numbers and operator before pressing "="


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

function operate(a,b, operator) {
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