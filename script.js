let displayValue = '0';
let operator = '';
let firstOperand = '';
let waitingForSecondOperand = false;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (waitingForSecondOperand) {
        displayValue = value;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? value : displayValue + value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

function setOperator(op) {
    if (operator !== '' && !waitingForSecondOperand) {
        calculateResult();
    }
    operator = op;
    firstOperand = displayValue;
    waitingForSecondOperand = true;
}

function calculateResult() {
    if (operator === '+') {
        displayValue = (parseFloat(firstOperand) + parseFloat(displayValue)).toString();
    } else if (operator === '-') {
        displayValue = (parseFloat(firstOperand) - parseFloat(displayValue)).toString();
    } else if (operator === '*') {
        displayValue = (parseFloat(firstOperand) * parseFloat(displayValue)).toString();
    } else if (operator === '/') {
        if (parseFloat(displayValue) !== 0) {
            displayValue = (parseFloat(firstOperand) / parseFloat(displayValue)).toString();
        } else {
            displayValue = 'Error';
        }
    }
    operator = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', function () {
    updateDisplay();
});
