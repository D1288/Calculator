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
let backspace = document.querySelector(".backspace")
let valueCalc = [];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let operators = ['+', '-', 'x', '÷']



//Button functions
clearButton.addEventListener('click', () => {
    valueCalc = [];
    valueShown.textContent = valueCalc;
    console.log(valueCalc)
})

backspace.addEventListener('click', () => {
    valueCalc.pop()
    valueShown.textContent = valueCalc.toString().replaceAll(',', '')
    console.log(valueCalc)
})



numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let num1 = button.textContent;
        valueCalc.push(num1);
        if (valueCalc.length > 1 && !isNaN(valueCalc[1])) {
            valueCalc[0] += valueCalc[1];
            valueCalc = valueCalc.slice(0, 1)
        }
        if (valueCalc.length > 3 && !isNaN(valueCalc[3])) {
            valueCalc[2] += valueCalc[3];
            valueCalc = valueCalc.slice(0, 3)
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    })
})

addButton.addEventListener('click', () => {
    valueCalc.push(addButton.textContent);
    if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
        valueCalc = [];
    }
    if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0, 2)
    }
    if (valueCalc.length > 3) {
        valueCalc = valueCalc.slice(0, 3)
        operate();
        valueCalc.push(addButton.textContent);
    }
    valueShown.textContent = valueCalc.toString().replaceAll(',', '');
    console.log(valueCalc)
    //valueCalc = [add(valueCalc[0], valueCalc[2])]
})

subtractButton.addEventListener('click', () => {
    valueCalc.push(subtractButton.textContent);
    if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
        valueCalc = [];
    }
    if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0, 2)
    }
    if (valueCalc.length > 3) {
        valueCalc = valueCalc.slice(0, 3)
        operate();
        valueCalc.push(subtractButton.textContent);
    }
    valueShown.textContent = valueCalc.toString().replaceAll(',', '');
    console.log(valueCalc)
    // valueCalc = [subtract(valueCalc[0], valueCalc[1])]
})

multiplyButton.addEventListener('click', () => {
    valueCalc.push(multiplyButton.textContent);
    if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
        valueCalc = [];
    }
    if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0, 2)
    }
    if (valueCalc.length > 3) {
        valueCalc = valueCalc.slice(0, 3)
        operate();
        valueCalc.push(multiplyButton.textContent);
    }
    valueShown.textContent = valueCalc.toString().replaceAll(',', '');
    console.log(valueCalc)
    // valueCalc = [multiply(valueCalc[0], valueCalc[1])]
})

divideButton.addEventListener('click', () => {
    valueCalc.push(divideButton.textContent);
    if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
        valueCalc = [];
    }
    if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
        valueCalc[1] = valueCalc[2];
        valueCalc = valueCalc.slice(0, 2)
    }
    if (valueCalc.length > 3) {
        valueCalc = valueCalc.slice(0, 3)
        operate();
        valueCalc.push(divideButton.textContent);
    }
    valueShown.textContent = valueCalc.toString().replaceAll(',', '');
    console.log(valueCalc)
    // valueCalc = [divide(valueCalc[0], valueCalc[1])]
})

equalButton.addEventListener('click', () => {
    operate();
})



decimalButton.addEventListener('click', () => {
    if (!valueCalc[0].includes('.')) {
        valueCalc.push(decimalButton.textContent);
    } else if (!isNaN(valueCalc[2]) && !valueCalc[2].includes('.')) {
        valueCalc.push(decimalButton.textContent);
    }
    if (valueCalc.length > 1 && valueCalc[1] === '.') {
        valueCalc[0] += valueCalc[1];
        valueCalc = valueCalc.slice(0, 1)
    }

    if (valueCalc.length > 3 && valueCalc[3] === '.') {
        valueCalc[2] += valueCalc[3];
        valueCalc = valueCalc.slice(0, 3)

    }



    console.log(valueCalc);
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
    if (y === '0') {
        return 'you buffoon'
    }
    return x / y;
}


function operate() {
    if (valueCalc.includes('+')) {
        valueCalc = [add(valueCalc[0], valueCalc[2])];
    } else if (valueCalc.includes('-')) {
        valueCalc = [subtract(valueCalc[0], valueCalc[2])];
    } else if (valueCalc.includes('x')) {
        valueCalc = [multiply(valueCalc[0], valueCalc[2])];
    } else if (valueCalc.includes('÷')) {
        valueCalc = [divide(valueCalc[0], valueCalc[2])]
    }
    valueShown.textContent = valueCalc;
    console.log(valueCalc)
}

//keyboard input
const keyboardNums = ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9']
const altKeyboardNums = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9']




window.addEventListener("keydown", (e) => {
    console.log(e.code);
    if (keyboardNums.includes(e.code)) {
        valueCalc.push(e.code.slice(6, 7))
        if (valueCalc.length > 1 && !isNaN(valueCalc[1])) {
            valueCalc[0] += valueCalc[1];
            valueCalc = valueCalc.slice(0, 1)
        }
        if (valueCalc.length > 3 && !isNaN(valueCalc[3])) {
            valueCalc[2] += valueCalc[3];
            valueCalc = valueCalc.slice(0, 3)
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    } else if (altKeyboardNums.includes(e.code)) {
        valueCalc.push(e.code.slice(5, 6))
        if (valueCalc.length > 1 && !isNaN(valueCalc[1])) {
            valueCalc[0] += valueCalc[1];
            valueCalc = valueCalc.slice(0, 1)
        }
        if (valueCalc.length > 3 && !isNaN(valueCalc[3])) {
            valueCalc[2] += valueCalc[3];
            valueCalc = valueCalc.slice(0, 3)
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    } else if (e.code === 'NumpadMultiply' || e.code === 'KeyX') {
        valueCalc.push('x')
        if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
            valueCalc = [];
        }
        if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
            valueCalc[1] = valueCalc[2];
            valueCalc = valueCalc.slice(0, 2)
        }
        if (valueCalc.length > 3) {
            valueCalc = valueCalc.slice(0, 3)
            operate();
            // valueCalc.push('x');
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    } else if (e.code === 'NumpadDivide' || e.code === 'Slash') {
        valueCalc.push(divideButton.textContent);
        if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
            valueCalc = [];
        }
        if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
            valueCalc[1] = valueCalc[2];
            valueCalc = valueCalc.slice(0, 2)
        }
        if (valueCalc.length > 3) {
            valueCalc = valueCalc.slice(0, 3)
            operate();
            valueCalc.push(divideButton.textContent);
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    } else if (e.code === 'NumpadAdd' || e.code === 'Equal' && e.shiftKey) {
        valueCalc.push(addButton.textContent);
        if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
            valueCalc = [];
        }
        if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
            valueCalc[1] = valueCalc[2];
            valueCalc = valueCalc.slice(0, 2)
        }
        if (valueCalc.length > 3) {
            valueCalc = valueCalc.slice(0, 3)
            operate();
            valueCalc.push(addButton.textContent);
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    } else if (e.code === 'NumpadSubtract' || e.code === 'Minus') {
        valueCalc.push(subtractButton.textContent);
        if (valueCalc.length === 1 && !numbers.includes(valueCalc[0])) {
            valueCalc = [];
        }
        if (valueCalc.length > 2 && !numbers.includes(valueCalc[2])) {
            valueCalc[1] = valueCalc[2];
            valueCalc = valueCalc.slice(0, 2)
        }
        if (valueCalc.length > 3) {
            valueCalc = valueCalc.slice(0, 3)
            operate();
            valueCalc.push(subtractButton.textContent);
        }
        valueShown.textContent = valueCalc.toString().replaceAll(',', '');
        console.log(valueCalc)
    } else if (e.code === 'NumpadDecimal' || e.code === 'Period') {
        if (!valueCalc[0].includes('.')) {
            valueCalc.push(decimalButton.textContent);
        } else if (!isNaN(valueCalc[2]) && !valueCalc[2].includes('.')) {
            valueCalc.push(decimalButton.textContent);
        }
        if (valueCalc.length > 1 && valueCalc[1] === '.') {
            valueCalc[0] += valueCalc[1];
            valueCalc = valueCalc.slice(0, 1)
        }

        if (valueCalc.length > 3 && valueCalc[3] === '.') {
            valueCalc[2] += valueCalc[3];
            valueCalc = valueCalc.slice(0, 3)

        }

        console.log(valueCalc);
    } else if (e.code === 'Equal' || e.code === 'Enter') {
        operate();
    } else if (e.code === 'Backspace') {
        valueCalc.pop()
        valueShown.textContent = valueCalc.toString().replaceAll(',', '')
        console.log(valueCalc)
    } else if (e.code === 'Delete') {
        valueCalc = [];
        valueShown.textContent = valueCalc;
        console.log(valueCalc)
    }





    e.preventDefault();


})