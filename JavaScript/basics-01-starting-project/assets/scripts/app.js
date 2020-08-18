function add(){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult,'');
}
addBtn.addEventListener('click',add);