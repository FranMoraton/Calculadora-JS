window.onload = function()
{
  const cachedDisplay = 0;
  const cachedOperation = '';
  const decimalBool = false;


  const buttons = document.getElementsByTagName("button");
  const arrButtons = Array.from(buttons);
  arrButtons.map(button => button.addEventListener("click",function()
{
   const operator = whatToDo(button.innerHTML);
   if (0 !== operator){
   operator(button.getAttribute('data-action'));
  }
}
));

  function whatToDo(valor)
  {
    if(isNaN(valor))
    {
      return function (keyOperations) {
        operationsFactory[keyOperations]();
      }
    } else {
          increaseNumber(valor);
          return 0;
      }
  }

function increaseNumber(valor)
{
  let displayNumber = document.getElementsByClassName('calculator__display')[0].innerHTML;
  if (displayNumber == 0)
  {
      displayNumber = '';
    }
  if (displayNumber.length < 9)
  {
  displayNumber += valor;
    }

    setDisplayNumber(displayNumber);
}


function setDisplayNumber(number) {
  document.getElementsByClassName('calculator__display')[0].innerHTML = number;
}

function clear() {
    const cachedDisplay = 0;
    setDisplayNumber(0);
};

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function decimal() {
    let display = document.getElementsByClassName('calculator__display')[0].innerHTML
    if (false === decimalBool)
    {
      display += '.'
        setDisplayNumber(display);
        changeDecimalBool();
      }
}

function changeDecimalBool()
{
  const decimalBool = !decimalBool;
}

function saveDisplayAndReset()
{
  const cachedDisplay = document.getElementsByClassName('calculator__display')[0].innerHTML;
  document.getElementsByClassName('calculator__display')[0].innerHTML = 0;
  changeDecimalBool();
}

const operationsFactory = {
  add: function () { const cachedOperation = 'add'; saveDisplayAndReset(); },
  subtract: function () { const cachedOperation = 'subtract'; saveDisplayAndReset(); },
  multiply: function () { const cachedOperation = 'multiply'; saveDisplayAndReset(); },
  divide: function () { const cachedOperation = 'divide'; saveDisplayAndReset(); },
  decimal: function () { decimal(); },
  clear: function () { clear(); },
  calculate: function () { calculate(); }
}

function calculate() {
    let num1 = parseFloat(document.getElementsByClassName('calculator__display')[0].innerHTML);
    let num2 = parseFloat(cachedDisplay);
    let result = operations[cachedOperation](num1, num2);
    setDisplayNumber(result);
    changeDecimalBool();
}

const operations = {
    add: function (num1, num2) { add(num1, num2); },
    subtract: function (num1, num2) { subtract(num1, num2); },
    multiply: function (num1, num2) { multiply(num1, num2); },
    divide: function (num1, num2) { divide(num1, num2); }
}
};
