const table = document.querySelector('table');
const display = document.querySelector('.display');

table.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    display.textContent += e.target.textContent;
});