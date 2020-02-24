let val1='';
let operator;
let isOperClicked = false;
let dot=false
let val2='';

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.functional');
const equal = document.getElementById('equal');
const display = document.getElementById('display');
const ac = document.getElementById('ac');

function click(event) {
    const buttonValue = event.target.value;
  if(!dot||buttonValue!='.') { 
    display.value += buttonValue;

     if(buttonValue === '.') {
        dot = true
     }

     if(isOperClicked ) {
             val2 += buttonValue;  
             display.value = val2;
     } else {
         val1 += buttonValue
         display.value = val1;
     }
}}


numbers.forEach(element => {
     element.addEventListener('click', click);
})

function op(event) {
    dot=false
    val1 = +display.value;
    isOperClicked = true;
    display.value = "";
    operator = event.target.value;
}

operators.forEach(element => {
    element.addEventListener('click', op);
})

equal.addEventListener('click',function (event) {
    val2 =+ display.value;
    isOperClicked = false;
    dot=false
    display.value = logic(operator)
    val1 = "";
    val2 = "";
})




ac.addEventListener('click',clear)


function clear () {
    val1 = "";
    val2 = "";
    dot=false
    isOperClicked = false;
    display.value = "";
}


function sum(val1,val2){
    return val1+val2;
}


function dif(val1,val2) {
    return val1 - val2;
}


function multiplic(val1,val2){
    return val1*val2;
}


function division(val1,val2){
    return val1/val2;
}



function logic(operator) {
    switch (operator) {
        case '+':
            return sum(val1,val2); 
        case '-':
            return dif(val1,val2); 
        case '*':
            return multiplic(val1,val2); 
        case '/':
            return division(val1,val2);
    }
}