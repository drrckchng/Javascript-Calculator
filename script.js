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

// Calls upon the appropriate expression operator function
function operate(a, operator, b) {
    a = parseInt(a);
    b = parseInt(b);
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

// Will take tuples of the expression array and call operate() while keeping 
// track of the total
function calculate(inputArray) {
    let total = 0;
    while(inputArray.length >= 3) {
        total = operate(inputArray[0], inputArray[1], inputArray[2]);
        // remove first 3 elements
        inputArray.splice(0, 3);
        // add total so far to the front of array
        inputArray.unshift(total);
    }
    return total;
}

// Take the button that has been clicked and determine whether the button
// is an operator or number or ETC function (plusminus, clear)
// Will need to refactor function after...
function inputVerify(button) {
    console.log(button.target.classList.value);
    console.log(button.target.value);

    if(button.target.classList.value === 'numkey') {

        if(checkExpressionNumPos()) {
            expression.push(button.target.value);
        // Prevent user from adding numbers onto stored result
        } else if(!checkExpressionNumPos() && memoryStoreState === true) {
            alert("ERROR: Please enter operator");
        } else {
            expression.push(expression.pop() + button.target.value.toString());
        }

    } else if(button.target.classList.value === 'operator') {

        if(!checkExpressionNumPos()) {
            expression.push(button.target.value);
        } else {
            alert("ERROR: Please enter a number");
        }

    } else if(button.target.value === "calculate") {

        if(!checkExpressionNumPos() && expression.length > 0) {
            memoryStoreState = true; // mark current status as storing mem
            console.log(calculate(expression));
        } else {
            alert("ERROR");
        }
    
    // Clear last element of expression index
    } else if(button.target.value === "clear") {
        expression.pop();

    } else if(button.target.value === "all-clear") {
        expression = [];
        memoryStoreState = false;

    }
    // Add check for AC button that will clear expression and memory state

}

// Check if expression array is 
function checkExpressionNumPos(){
    if(expression.length  % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


const calcButtons = document.getElementById("calc-buttons");
const calcExpDisplay = document.getElementById("expression-display");
const calcResultDisplay = document.getElementById("result-display");

calcButtons.addEventListener('click', (event) => {
    // Do nothing if click is not on a button
    if(event.target.nodeName !== 'BUTTON') {
      return;
    }
    inputVerify(event);
});

let expression = [];
let memoryStoreState = false; // memory status to avoid result overwrite
