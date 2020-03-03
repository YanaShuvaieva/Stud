//1
//////////////////
var a = 5;
console.log (window.a); //5

//2
/////////////////
window.a = 5;
console.log(a); //5

//3
/////////////////
window.recurse = function(times) {
    if(times !==0) recurse(times - 1); //рекурсия через функцию, явно записанную в window
}
recurse(13); //нельзя функцию напрямую присваивать в window.recurse(обычное объявление функции)

//4
////////////////
sayHi('Yana')

function sayHi(name) {      //LexicalEnvironment = { name: 'Yana', phrase: undefined}
    var phrase = "Привет" + name;
        //LexicalEnvironment = { name: 'Yana', phrase: 'Привет, Yana'}
        console.log(phrase);
}

//5
///////////////////
var userName = "Yana";

function sayHi() {
    console.log(userName); //"Yana"
}

//6
///////////////////
var phrase = 'Hello';
function sayHi(name) {
    console.log(phrase + ','+ name);
}

sayHi('Yana'); //Hello, Yana
phrase = 'Bye';
console.log(phrase + ',' + name); // Bye, Yana

//7
////////////////////
function sayHiBye (firstName, lastName) {
    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());

function getFullName() {
    return firstName + " " + lastName;
    }
}
sayHiBye("Yana", "Shuvaieva"); //Hello, Yana Shuvaieva; Bye, Yana Shuvaieva

//8
/////////////////////
function makeCounter () {
    var currentCount = 1;
    return function() {
        return currentCount++;
    };
}
var counter = makeCounter(); // каждый вызов увеличивает счетчик и возвращает результат
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3

var counter2 = makeCounter(); // создать другой счетчик, он будет независим
console.log(counter2()); //1

//9
//////////////////////
function pow(x, n) {
    if(n !== 1) { // пока n!=1, сводить вычисление pow(x, n) к pow(x, n-1)
        return x * pow(x, n-1);
    } else {
        return x;
    }
}

//10
///////////////////////
