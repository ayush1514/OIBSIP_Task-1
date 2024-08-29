const screen = document.getElementById('screen');
const keys = document.querySelector('.calculator-keys');
let operator = '';
let firstValue = '';
let secondValue = '';

keys.addEventListener('click', function(event) {
    const target = event.target;

    if (!target.matches('button')) {
        return;
    }

    const keyValue = target.value;

    if (target.classList.contains('operator')) {
        operator = keyValue;
        firstValue = screen.value;
        screen.value = '';
    } else if (target.id === 'equals') {
        secondValue = screen.value;
        screen.value = calculate(firstValue, operator, secondValue);
        operator = '';
    } else if (target.id === 'clear') {
        screen.value = '';
        operator = '';
        firstValue = '';
        secondValue = '';
    } else {
        screen.value += keyValue;
    }
});

function calculate(firstValue, operator, secondValue) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }
    return result;
}