// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
    
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    
    function calculate() {
        let result;
        const [a, op, b] = [parseFloat(firstOperand), operator, parseFloat(currentInput)];
        
        switch (op) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                result = b;
                break;
        }
        
        return result;
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            
            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    firstOperand = currentInput;
                    currentInput = '';
                }
                operator = value;
            } else {
                currentInput += value;
            }
            
            display.textContent = currentInput || '0';
        });
    });
    
    equalsButton.addEventListener('click', () => {
        if (firstOperand && operator && currentInput) {
            const result = calculate();
            display.textContent = result;
            currentInput = result;
            firstOperand = '';
            operator = '';
        }
    });
    
    clearButton.addEventListener('click', () => {
        currentInput = '';
        operator = '';
        firstOperand = '';
        display.textContent = '0';
    });
});
