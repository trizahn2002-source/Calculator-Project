// Data Structure: array to store all calculations
let historyArray = [];

// State
let currentInput   = '';
let expressionStr  = '';
let justCalculated = false;

// DOM Elements
const resultEl     = document.getElementById('result');
const expressionEl = document.getElementById('expression');
const historyList  = document.getElementById('historyList');

// Calculator Functions
function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b)   { return b === 0 ? 'Error' : a / b; }

function updateDisplay(value, expr) {
  resultEl.textContent = value !== '' ? value : '0';
  resultEl.classList.remove('error');
  expressionEl.textContent = expr || '';
}
function inpputNum(num) {
    if (justCalculated)
}