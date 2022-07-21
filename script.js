// Initial action plan...
// On each click of button, push() value into array
// Add input verification (must start with num, cant end with operator)
// Upon clicking on "=" will call upon calculate() function
//     should clear array and push() total value as first element of array
// Add a backspace button that will pop() last element

// Things to keep in mind...
// User input validity. Need to make sure that users will press "number, operator, number"
// Implement alert with a universal error (red screen/screen shake/err msg)
// Additionally: need to verify user has inputed 2 numbers and operator before pressing "="

// For future implementation
// if user clicks on "decimal" button...
// ensure the last value inputted into array is a numkey
// if numkey, remove last element and add decimal and push() again to array

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    if(operator == "add") {
        return add(a, b);
    } else if(operator == "subtract") {
        return subtract(a, b);
    } else if(operator == "multiply") {
        return multiply(a, b);
    } else if(operator == "divide") {
        return divide(a, b);
    }
}

function calculate(inputArray) {
    let total = 0;
    while(inputArray.length >= 3) {
        total = operate(inputArray[0], inputArray[1], inputArray[2]);
        inputArray.splice(0, 3);
        inputArray.unshift(total);
    }
    return total;
}

function inputVerify(button) {
    console.log(button.target.classList.value);
    console.log(button.target.value);
}

const calculatorButtons = document.getElementById("calc-buttons");

calculatorButtons.addEventListener('click', (event) => {
    // Do nothing if click is not on a button
    if(event.target.nodeName !== 'BUTTON') {
      return;
    }
    inputVerify(event);
});

const testExpression = [3, "add", 2, "add", 3];
let expression = [];
console.log(calculate(testExpression));