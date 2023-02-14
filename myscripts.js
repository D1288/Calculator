//Button Variable Assignment
const numButtons = document.querySelectorAll(".numButton");
const addButton = document.querySelector(".buttonAdd");
const subtractButton = document.querySelector(".buttonSubtract");
const multiplyButton = document.querySelector(".buttonMultiply");
const divideButton = document.querySelector(".buttonDivide");
const decimalButton = document.querySelector(".buttonDecimal");
const equalButton = document.querySelector(".buttonEqual");
const clearButton = document.querySelector(".buttonClear")
let valueShown = document.querySelector(".valueShown")
let valueCalc = [];

clearButton.addEventListener('click', () => {
    valueCalc = [];
    valueShown.textContent = valueCalc;
    console.log(valueCalc)
})

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        valueCalc.push(button.textContent);
        valueShown.textContent = valueCalc;
        console.log(valueCalc)
    })
})

addButton.addEventListener('click', () => {
    valueCalc.push(addButton.textContent);
    console.log(valueCalc)
    //valueCalc = [add(valueCalc[0], valueCalc[2])]
})

subtractButton.addEventListener('click', () => {
    valueCalc.push(subtractButton.textContent);
   // valueCalc = [subtract(valueCalc[0], valueCalc[1])]
})

multiplyButton.addEventListener('click', () => {
    valueCalc.push(multiplyButton.textContent);
   // valueCalc = [multiply(valueCalc[0], valueCalc[1])]
})

divideButton.addEventListener('click', () => {
    valueCalc.push(divideButton.textContent);
   // valueCalc = [divide(valueCalc[0], valueCalc[1])]
})

equalButton.addEventListener('click', () => {
    operate();
})



//Math functions

function add(x, y) {
    return +x + +y
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate() {
    if(valueCalc.includes('+')){
        valueCalc = [add(valueCalc[0], valueCalc[2])];
    } else if(valueCalc.includes('-')){
        valueCalc = [subtract(valueCalc[0], valueCalc[2])];
    } else if (valueCalc.includes('x')){
        valueCalc = [multiply(valueCalc[0], valueCalc[2])];
    } else if (valueCalc.includes('÷')){
        valueCalc = [divide(valueCalc[0], valueCalc[2])]
    }
    valueShown.textContent = valueCalc;
    console.log(parseInt(valueCalc))
}