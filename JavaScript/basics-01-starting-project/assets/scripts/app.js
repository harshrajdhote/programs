const defaultResult = 0;
let currentResult = defaultResult;
let calcDescription='0'; 
userInput.value = 0;
//Get input frm input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}
//Generates and writes calculation log
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    calcDescription += ` ${operator} ${calcNumber}`;
    userInput.value = 0;
    outputResult(currentResult,calcDescription);
}
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
}
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}
function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
}
addBtn.addEventListener('click',add);
multiplyBtn.addEventListener('click',multiply);
subtractBtn.addEventListener('click',subtract);
divideBtn.addEventListener('click',divide);