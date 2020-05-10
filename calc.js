//Buttons
const buttonOne = document.getElementById('1');
const buttonTwo = document.getElementById('2');
const buttonThree = document.getElementById('3');
const buttonFour = document.getElementById('4');
const buttonFive = document.getElementById('5');
const buttonSix = document.getElementById('6');
const buttonSeven = document.getElementById('7');
const buttonEight = document.getElementById('8');
const buttonNine = document.getElementById('9');
const buttonZero = document.getElementById('0');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonTimes = document.getElementById('times');
const buttonDivide = document.getElementById('divide');
const buttonNegative = document.getElementById('negative');
const buttonClear = document.getElementById('clear');
const buttonAllClear = document.getElementById('allclear');
const buttonDot = document.getElementById('dot');
const buttonEnter = document.getElementById('enter');

//Initialize display
const display = document.getElementById('display_field');
let displayValue = '0';
display.innerHTML = displayValue;

//Initialize memory
let memory = 0;
let isActive = false;
let operation = '';
let finished = false;

//Add number of button clicked to display
function numButtonClick(num) {
    if(finished === true) {
        memory = 0;
        finished = false;
    }
    if(displayValue === '0') {
        displayValue = num;
        display.innerHTML = displayValue;
    } else {
        displayValue += num;
        display.innerHTML = displayValue;
    }
    isActive = false;
}

//Calculate number and add number to memory
function arithmatic() {
    if(operation === 'divide' && parseFloat(displayValue) == 0) {
        memory = 'DIVIDE BY 0 ERROR';
        display.innerHTML = memory;
        memory = 0;
        operation = '';
        displayValue = '0';
        return 0;
    }
    switch(operation) {
        case 'plus':
            memory += parseFloat(displayValue);
            break;
        case 'minus':
            memory -= parseFloat(displayValue);
            break;
        case 'times':
            memory *= parseFloat(displayValue);
            break;
        case 'divide':
            memory /= parseFloat(displayValue);
            break;
        case '':
            memory += parseFloat(displayValue);
            break;
        default:
            display.innerHTML = 'ERROR';
    }
    display.innerHTML = memory;
    displayValue = '0';
}

//Number button click handlers:
buttonOne.onclick = () => {numButtonClick('1')};
buttonTwo.onclick = () => {numButtonClick('2')};
buttonThree.onclick = () => {numButtonClick('3')};
buttonFour.onclick = () => {numButtonClick('4')};
buttonFive.onclick = () => {numButtonClick('5')};
buttonSix.onclick = () => {numButtonClick('6')};
buttonSeven.onclick = () => {numButtonClick('7')};
buttonEight.onclick = () => {numButtonClick('8')};
buttonNine.onclick = () => {numButtonClick('9')};
buttonZero.onclick = () => {numButtonClick('0')};

//Number modifier handlers:
buttonDot.onclick = () => {
    if(displayValue.indexOf('.') === -1) {
        displayValue += '.';
        display.innerHTML = displayValue;
    }
}

buttonNegative.onclick = () => {
    displayValue = (parseFloat(displayValue) * -1).toString();
    display.innerHTML = displayValue;
}

//Clear button click handlers:
buttonClear.onclick = () => {
    displayValue = '0';
    display.innerHTML = displayValue;
}

buttonAllClear.onclick = () => {
    displayValue = '0';
    display.innerHTML = displayValue;
    memory = 0;
}

buttonPlus.onclick = () => {
    if(finished === true) {
        finished = false;
    }
    if(!isActive) {
        arithmatic();
    }
    operation = 'plus';
    isActive = true;
}

buttonMinus.onclick = () => {
    if(finished === true) {
        finished = false;
    }
    if(!isActive) {
        arithmatic();
    }
    operation = 'minus';
    isActive = true;
}

buttonTimes.onclick = () => {
    if(finished === true) {
        finished = false; 
    }
    if(!isActive) {
        arithmatic();
    }
    operation = 'times';
    isActive = true;
}

buttonDivide.onclick = () => {
    if(finished === true) {
        finished = false;
    }
    if(!isActive) {
        arithmatic();
    }
    operation = 'divide';
    isActive = true;
}

//Enter button handler:
buttonEnter.onclick = () => {
    arithmatic();
    operation = '';
    finished = true;
} 

