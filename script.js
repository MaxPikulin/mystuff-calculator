const table = document.querySelector('table');
const display = document.querySelector('.display');
const history = document.querySelector('.history');

let aNum, bNum, oper, done = false;
const operators = {
    "+": function() { return aNum + bNum },
    "-": function() { return aNum - bNum },
    "*": function() { return aNum * bNum },
    "/": function() { return aNum / bNum }
}

function operation(a, b) {
    console.log()
}

function handler(e) {
    let symbol = e.target.textContent;
    if (/[-+*/]/.test(symbol)) {
        aNum = parseInt(display.textContent);
        oper = symbol;
        history.textContent = aNum + ' ' + oper;
        display.textContent = '0';
        return;
    }
    if (symbol == '=') {
        bNum = parseInt(display.textContent);
        let result = operators[oper]();
        display.textContent = result;
        history.textContent += ' ' + bNum + ' = ' + result;
        done = true;
        return;
    }

    display.textContent == 0 || done ? (display.textContent = symbol, done = false) : display.textContent += symbol;
}

table.addEventListener('click', handler);