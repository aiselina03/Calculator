//islemir :(

const input = document.querySelector('input');

let sonInput = '';
let sonNetice = 0;
let operator = null;

function calculateResult() {
    const num1 = parseFloat(sonNetice);
    const num2 = parseFloat(sonInput);

    switch (operator) {
        case '+':
            sonNetice = num1 + num2;
            break;
        case '-':
            sonNetice = num1 - num2;
            break;
        case '*':
            sonNetice = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                sonNetice = num1 / num2;
            } else {
                input.value = 0;
            }
            break;
        case '%':
            sonNetice = (num1 * num2) / 100;
            break;
        default:
            sonNetice = num2;
    }
    input.value = sonNetice; }

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '.') {
        appendDecimal();
    } else if (event.key === '+') {
        setOperator('+');
    } else if (event.key === '-') {
        setOperator('-');
    } else if (event.key === '*') {
        setOperator('*');
    } else if (event.key === '/') {
        setOperator('/');
    } else if (event.key === '%') {
        setOperator('%');
    } else if (event.key === '=' || event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Escape') {
        clearInput();
    }
});