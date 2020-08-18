const defaultResult = 0;
let currentResult = defaultResult;
function add(){
    const enteredNumber = parseInt(userInput.value);
    const calcDesp = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult +enteredNumber;//shortcut + +
    userInput.value = 0;
    outputResult(currentResult,calcDesp);
}
function divide(){
    const enteredNumber = parseInt(userInput.value);
    const calcDesp = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    userInput.value = 0;
    outputResult(currentResult,calcDesp);
}
function multiply(){
    const enteredNumber = parseInt(userInput.value);
    const calcDesp = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    userInput.value = 0;
    outputResult(currentResult,calcDesp);
}
function subtract(){
    const enteredNumber = parseInt(userInput.value);
    const calcDesp = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    userInput.value = 0;
    outputResult(currentResult,calcDesp);
}
addBtn.addEventListener('click',add);
multiplyBtn.addEventListener('click',multiply);
subtractBtn.addEventListener('click',subtract);
divideBtn.addEventListener('click',divide);