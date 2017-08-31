const table = document.querySelector('table');
const display = document.querySelector('.display');
const history = document.querySelector('.history');

let currNum, prevNum, operator, done = false;
const operation = {
    "+": function() { return +prevNum + +currNum },
    "-": function() { return +prevNum - +currNum },
    "*": function() { return +prevNum * +currNum },
    "/": function() { return +prevNum / +currNum },
    "%": function() { return +prevNum % +currNum }
};

function calcHandler(e) {
    if (e.target.localName != 'td') return;
    let symbol = e.target.innerText;

    switch (symbol) {
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
            currNum = (currNum || '') + symbol;
            break;
        case '.':
            if (currNum != undefined && currNum.includes('.')) return;
            currNum = (currNum ? currNum : '0') + symbol;
            break;
        case 'C':
            prevNum = currNum = undefined;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            if (prevNum != undefined) {
                currNum = operation[operator]();
                display.textContent = currNum;
            }
            operator = symbol;
            prevNum = currNum;
            currNum = undefined;
            return;


        case '=':
            if (currNum == undefined) return;
            display.textContent = currNum = operation[operator]();
            operator = undefined;
            prevNum = undefined;
            return;
    }
    display.textContent = currNum || '0';
    // if (/[-+*/]/.test(symbol)) {
    //     aNum = parseInt(display.textContent);
    //     oper = symbol;
    //     history.textContent = aNum + ' ' + oper;
    //     display.textContent = '0';
    //     return;
    // }
    // if (symbol == '=') {
    //     currNum = parseInt(display.textContent);
    //     let result = operators[oper]();
    //     display.textContent = result;
    //     history.textContent += ' ' + currNum + ' = ' + result;
    //     done = true;
    //     return;
    // }

    // display.textContent == 0 || done ? (display.textContent = symbol, done = false) : display.textContent += symbol;
}

table.addEventListener('click', calcHandler);