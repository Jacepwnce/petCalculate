
import displayCalc from './calc.js'
function sum (a, b) {
    return a + b;
}

function minus (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

export default function allClear () {
    displayCalc.textContent = '';
}