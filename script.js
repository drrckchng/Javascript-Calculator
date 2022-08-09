// Things to keep in mind...
// Implement alert with a universal error (red screen/screen shake/err msg)


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
            memoryStoreState = false;
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
    // Clear all elements of expression
    } else if(button.target.value === "all-clear") {
        expression = [];
        memoryStoreState = false;
    }
}

// Check if expression array is 
function checkExpressionNumPos() {
    if(expression.length  % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function updateDisplay() {
    calcDisplay.innerText = "";
    expression.forEach(element => {
        if(element === "divide") {
            element = "\xF7";
        } else if( element === "multiply") {
            element = "\xD7";
        } else if(element === "subtract") {
            element = "\u2212";
        } else if(element === "add") {
            element = "\x2B";
        }
        calcDisplay.innerText += element;
    });
}


const calcButtons = document.getElementById("calc-buttons");
const calcDisplay = document.getElementById("expression-display");

calcButtons.addEventListener('click', (event) => {
    // Do nothing if click is not on a button
    if(event.target.nodeName !== 'BUTTON') {
      return;
    }
    inputVerify(event);
    updateDisplay();
});

let expression = [];
let memoryStoreState = false; // memory status to avoid result overwrite
