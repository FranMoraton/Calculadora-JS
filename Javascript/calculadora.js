window.onload = function()
{
  var cachedDisplay = 0;
  var cachedOperation = '';
  var decimalBool = false;


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
     cachedDisplay = 0;
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
   decimalBool = true;
}
function resetDecimalBool()
{
   decimalBool = false;
}
function saveDisplayAndReset()
{
   cachedDisplay = document.getElementsByClassName('calculator__display')[0].innerHTML;
  document.getElementsByClassName('calculator__display')[0].innerHTML = 0;
  resetDecimalBool();
}

const operationsFactory = {
  add: function () {  cachedOperation = 'add'; saveDisplayAndReset(); },
  subtract: function () {  cachedOperation = 'subtract'; saveDisplayAndReset(); },
  multiply: function () {  cachedOperation = 'multiply'; saveDisplayAndReset(); },
  divide: function () {  cachedOperation = 'divide'; saveDisplayAndReset(); },
  decimal: function () { decimal(); },
  clear: function () { clear(); },
  calculate: function () { calculate(); }
}

function calculate() {
    let num1 = parseFloat(cachedDisplay);
    let num2 = parseFloat(document.getElementsByClassName('calculator__display')[0].innerHTML);
    let result = operations[cachedOperation](num1, num2);
    console.log(result);
    setDisplayNumber(result);
    resetDecimalBool();
}

const operations = {
    add: function (num1, num2) { return add(num1, num2); },
    subtract: function (num1, num2) { return subtract(num1, num2); },
    multiply: function (num1, num2) {  return multiply(num1, num2); },
    divide: function (num1, num2) { return divide(num1, num2); }
}
};
