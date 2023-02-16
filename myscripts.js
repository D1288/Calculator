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
let numbers = ['1','2','3','4','5','6','7','8','9']
let operators = [ '+','-','x','÷']
clearButton.addEventListener('click', () => {
    valueCalc = [];
    valueShown.textContent = valueCalc;
    console.log(valueCalc)
})



numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let num1 = button.textContent;
        valueCalc.push(num1);
        if(valueCalc.length > 1 && !isNaN(valueCalc[1]) ){
            valueCalc[0] += valueCalc[1];
            valueCalc = valueCalc.slice(0, 1)
        }
        if(valueCalc.length > 3 && !isNaN(valueCalc[3])){
            valueCalc[2] += valueCalc[3];
            valueCalc = valueCalc.slice(0,3)
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    })
})

addButton.addEventListener('click', () => {
    valueCalc.push(addButton.textContent);
    if(valueCalc.length > 2 && !numbers.includes(valueCalc[2]) ){
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0,2)
    }
    if(valueCalc.length > 3){
        valueCalc = valueCalc.slice(0,3)
        operate();
        valueCalc.push(addButton.textContent);
    }
    console.log(valueCalc)
    //valueCalc = [add(valueCalc[0], valueCalc[2])]
})

subtractButton.addEventListener('click', () => {
    valueCalc.push(subtractButton.textContent);
    if(valueCalc.length > 2 && !numbers.includes(valueCalc[2]) ){
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0,2)
    }
    if(valueCalc.length > 3){
        valueCalc = valueCalc.slice(0,3)
        operate();
        valueCalc.push(subtractButton.textContent);
    }
    console.log(valueCalc)
   // valueCalc = [subtract(valueCalc[0], valueCalc[1])]
})

multiplyButton.addEventListener('click', () => {
    valueCalc.push(multiplyButton.textContent);
    if(valueCalc.length > 2 && !numbers.includes(valueCalc[2]) ){
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0,2)
    }
    if(valueCalc.length > 3){
        valueCalc = valueCalc.slice(0,3)
        operate();
        valueCalc.push(multiplyButton.textContent);
    }
    console.log(valueCalc)
   // valueCalc = [multiply(valueCalc[0], valueCalc[1])]
})

divideButton.addEventListener('click', () => {
    valueCalc.push(divideButton.textContent);
    if(valueCalc.length > 2 && !numbers.includes(valueCalc[2]) ){
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0,2)
    }
    if(valueCalc.length > 3){
        valueCalc = valueCalc.slice(0,3)
        operate();
        valueCalc.push(divideButton.textContent);
    }
    console.log(valueCalc)
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
    console.log(valueCalc)
}