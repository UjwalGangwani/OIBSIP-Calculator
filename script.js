let result = document.getElementById('result');
let expression = '';

function appendValue(value) {
    expression += value;
    result.value = expression;
}

function clearDisplay() {
    expression ='';
    result.value = '';
}

function calculate() {
    try {
        let evalResult = eval(expression);
        result.value = evalResult;
        expression = evalResult.toString();
    } catch(error) {

        result.value = 'Error';
        expression ='';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if(!isNaN(key) || key === '.' || key === 'Enter') {
        if(key === 'Enter') {
            calculate();
        }else {
            appendValue(key);
        }
    } else if(key === 'Escape') {
        clearDisplay();
    } else if(key === '+' || key === '-' || key === '*' || key === '/') {
        appendValue(key);
    }
});