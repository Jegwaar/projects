class Calculator{
    constructor(){
        this.clear()
    }
    clear(){
        currentInput.innerHTML = '';
        previousInput.innerText = '';
    }
    delete(){
        currentInput.innerText = ''
    }
    appendNumber(number){
        if(number === '.' && (currentInput.innerText).includes('.')) return
        currentInput.innerText = currentInput.innerText + number;
    }
    chooseOperation(operation){
        this.operation = operation
        if(currentInput.innerText === '') return;
        if(previousInput.innerText !== ''){
            this.compute(operation)
        }
        this.appendNumber(operation);
        this.updateDisplay(currentInput.innerText)
    }
    compute(){
        let computation
        const prev = parseFloat(previousInput.innerText)
        const current = parseFloat(currentInput.innerText)
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation){
            case '/':
                computation = prev/current
                break;
            case 'X':
                computation = prev*current
                break;
            case '+':
                computation = prev+current
                break;
            case '-':
                computation = prev-current
                break;
            case '%':
                computation = (prev/100)*current
                break;
            case 'x^2':
                computation = prev**2
                break;
            default:
                break;
        }
        currentInput.innerText = computation;
        this.operation = undefined;
        previousInput.innerText = '';

    }
    updateDisplay(input){
        previousInput.innerText = input;
        this.delete();
    }
}

const previousInput = document.querySelector('[data-output-old]');
const currentInput = document.querySelector('[data-output-new]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const operationButton = document.querySelectorAll('[data-operation]');
const numberButton = document.querySelectorAll('[data-number]');
const equalButton = document.querySelector('[data-equels]');

const calculator = new Calculator();

previousInput.innerText = '';

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        const num = button.innerText
        calculator.appendNumber(num);
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
    })
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
})

equalButton.addEventListener('click', () => {
    calculator.compute();
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
})