//1
///////////////////
console.log(' 1 ', typeof function(){}); //function
//2
//////////////////
console.log (' 2 ', typeof []); //object
//3
/////////////////
console.log (' 3 ', typeof Array.isArray([])); //boolean
//4
////////////////
console.log(' 4 ', typeof null); //object
//5
////////////////
console.log (' 5 ', 10); //10
//6
////////////////
console.log (' 6 ', 0xfffcc); //1048524
//7
////////////////
console.log (' 7 ', 0345); //229
//8
////////////////
console.log (' 8 ', 012348); //12348
//9
////////////////
console.log(' 9 ', 12.45); //12.45
//10
////////////////
console.log(' 10 ', .89); //0.89
//11
/////////////////
console.log(' 11 ', 1.24e4); //12400
//12
/////////////////
console.log(' 12 ', 0 / 0); //NaN
//13
//////////////////
console.log(' 13 ', Infinity / Infinity); //NaN
//14
////////////////////
console.log(' 14 ', Math.sqrt(-10)); //NaN
//15
///////////////////
console.log(' 15 ', 1 / 0); //Infinity
//16
///////////////////
console.log(' 16 ', -1 / 0); //-Infinity
//17
//////////////////////////////
console.log(' 17 ',1/0); //Infinity
//18
/////////////////////////////
console.log(' 18 ',-1/0); //-Infinity
//19
///////////////////////////////
console.log(' 19 ',12.45); //12.45
//20
//////////////////////////////
let number=4000; console.log(' 20 ', typeof number); //number
//21
/////////////////////////
let newNumber=new Number(4000); console.log(' 21 ', typeof newNumber); //object
//22
/////////////////////////////
console.log(' 22 ', number.toFixed(3)); //4000.000
//23
///////////////////
console.log(' 23 ', newNumber.toFixed(3)); //4000.000
//24
///////////////////////////
let count=10; console.log(' 24 ', ++count); //11
//25
////////////////////////////
console.log(' 25 ', count); //11
//26
//////////////////////////
console.log(' 26 ', count++); //11
//27
///////////////////
console.log(' 27 ', count); //12
//28
////////////
let variable=100; console.log(' 28 ', variable+=20); //120
//29
/////////////////////
let anotherVariable=15; console.log(' 29 ', anotherVariable*=5); //75
//30
///////////////
console.log(' 30 ', 5>10); //false
//31
///////////////////////////
console.log(' 31 ', 5<10); //true
//32
//////////////////////////////
console.log(' 32 ', 10>=10); //true
//33
//////////////////////
console.log(' 33 ', 10===10); //true
//34
//////////////
console.log(' 34 ', '10'==10); //true
//35
///////////////////////////
console.log(' 35 ', '10'===10); //false
//36
////////////////
console.log(' 36 ', 10!==10); //false
//37
/////////////////
console.log(' 37 ', 0.2+0.1); //0.300000000000004
//38
////////////////////////
console.log(' 38 ', "string"); //"string"
//39
//////////////////////////
console.log(' 39 ', 'newString'); //newString
//40
///////////////////////////
console.log(' 40 ', `myString`); //myString
//41
/////////////////////////////
console.log(' 41 ', "this is my \"string\""); //this is my "string"
//42
///////////////////////
let str='new string'; console.log(' 42 ', str[2]); //w
//43
/////////////////////
console.log(' 43 ', 8===10); //false
//44
///////////////////////////////////
console.log(' 44 ', !!10); //true
//45
//////////////////////////////
console.log(' 45 ', 5&&10+5); //15
//46
/////////////////////////
console.log(' 46 ', "my String"||"default"); //my String
//47
////////////////////////
console.log(' 47 ', !8); //false
//48
/////////////////////
let temp; console.log(' 48 ', temp); //undefined
//49
/////////////////////////
let obj={}; console.log(' 49 ', obj.property); //undefined
//50
/////////////////////////////
let ar=[1,2,3]; console.log(' 50 ', ar[3]); //undefined
//51
///////////////////////////
console.log(' 51 ', typeof null); //object
//52
/////////////////////////////////
console.log(' 52 ', typeof undefined); //undefined
//53
///////////////////////////////
console.log(' 53 ', null==undefined); //true
//54
//////////////////////////////
console.log(' 54 ', null===undefined); //false
//55
//////////////////////////////
let symb=Symbol(); console.log(' 55 ', symb); //Symbol()
//56
////////////////////////////
console.log(' 56 ', typeof symb); //symbol
//57
///////////////////////////////////
let symbol=Symbol('name');
console.log(' 57 ', symbol); //Symbol(name)
let anotherSymbol=Symbol('name');
console.log('   ', anotherSymbol); //Symbol(name)
console.log('   ', symbol===anotherSymbol); //false
//58
///////////////////////////////////
let symbol1=Symbol.for('name');
console.log(' 58 ', symbol1); //Symbol(name)
let name=Symbol.keyFor(symbol1);
console.log('   ', name); //name
console.log('   ', typeof name); //string
//59
///////////////////////////////////
let object={
    x:20,
    y:30,
}
console.log(' 59 ',object.hasOwnProperty('x')) //true
console.log('   ',object) //{ x: 20, y: 30 }
delete object.y
console.log('   ',object) //{ x: 20 }
//60
///////////////////////////////////
let newObject=Object.create({ x:20, y:30, test:()=>console.log('test'),})
// let parent={
//     x:20,
//     y:30,
//     test:()=>console.log('test')
// }
// let child=Object.create(parent)
console.log(' 60 ',newObject.hasOwnProperty('x')) //false
console.log('   ','x' in newObject) //true
console.log('   ',newObject) //{}
console.log('   ',newObject.__proto__) // { x: 20, y: 30, test: [Function: test] }
console.log('   ',__proto__) //{}
//61
///////////////////////////////////
const array=[' 61  q','    w','    e']
for(const key of array)console.log(key) // q    w   e
//62
///////////////////////////////////
function hiName(name) {
    return ' 62  Hello '+name+'!';
}
console.log(hiName('Yana')) // Hello Yana!
//63
///////////////////////////////////
let myFunc=function(name) {
    return ' 63  Hello '+name+'!';
}
console.log(myFunc('Yana')) //Hello Yana!
//64
///////////////////////////////////
const qwe=()=>{return 'qwe'}
console.log(' 64 ',qwe) //[Function: qwe]
//65
///////////////////////////////////
let sum=new Function('a,b','return a+b;')
console.log(' 65 ',sum(1,6)) //7
//66
///////////////////////////////////
setTimeout(function () {
    console.log(' 66 ','qwe') //qwe
},1000)
//67
///////////////////////////////////
function F() {
    console.log(' 67 ',arguments) //[Arguments] { '0': '', '1': 1, '2': [], '3': {} }
}
F('',1,[],{})
//68
///////////////
