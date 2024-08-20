document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            removeLastCharacter();
            break;
        case '/':
        case '*':
        case '-':
        case '+':
            appendToDisplay(event.key);
            break;
        case '.':
            appendToDisplay('.');
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            appendToDisplay(event.key);
            break;
        default:
            break;
    }
});

let calcHistory = [];
const maxHistoryEntries = 10;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function removeLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        addToHistory(`${display.value} = ${result}`);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    const historyDiv = document.getElementById('history');
    
    calcHistory.push(entry);
    
    if (calcHistory.length > maxHistoryEntries) {
        calcHistory.shift();
    }
    
    historyDiv.innerHTML = calcHistory.join('<br>');
}

function clearHistory() {
    calcHistory = [];
    document.getElementById('history').innerHTML = '';
}
