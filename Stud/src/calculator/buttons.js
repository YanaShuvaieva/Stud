let val1, operator, isOperNotClicked=true,val2, isDotNotClicked=true;
function logic(val1,operator,val2){
    if(operator=='+') return val1+val2;
    if(operator=='-') return val1-val2;
    if(operator=='*') return val1*val2;
    if(operator=='/') return val1/val2;
}
function equal () {
    let size=document.getElementById('window').value.length;
    val2=document.getElementById('window').value.substring(val1.length+1,size);
    val1=+val1;
    val2=+val2;
    document.getElementById('window').value=logic(val1,operator,val2);
    isOperNotClicked=true;
    if(document.getElementById('window').value%1==0) isDotNotClicked=true;
    else isDotNotClicked=false
}
let ravno=document.getElementById('equal');
    ravno.addEventListener("click", equal);

function delite () {
    isOperNotClicked=true;
    isDotNotClicked=true;
    document.getElementById('window').value='';
}
let udal=document.getElementById('ac');
udal.addEventListener("click", delite);

function sum(){
    if(isOperNotClicked){
    let string=document.getElementById('window').value;
    let size=string.length;
    val1=string;
    operator='+';
    document.getElementById('window').value+='+';
    isOperNotClicked=false;   
    isDotNotClicked=true;
    }
}
let summa=document.getElementById('plus');
summa.addEventListener("click", sum);

function difference(){
    if(isOperNotClicked){
        let string=document.getElementById('window').value;
        let size=string.length;
        val1=string;
        operator='-';
        document.getElementById('window').value+='-';
        isOperNotClicked=false;   
        isDotNotClicked=true;
        }
    
}
let dif=document.getElementById('difference');
    dif.addEventListener("click", difference);

function multiplication(){
    if(isOperNotClicked){
        let string=document.getElementById('window').value;
        let size=string.length;
        val1=string;
        operator='*';
        document.getElementById('window').value+='*';
        isOperNotClicked=false;  
        isDotNotClicked=true; 
        }
   
}
let mult=document.getElementById('multiplication');
mult.addEventListener("click", multiplication);

function division(){
    if(isOperNotClicked){
        let string=document.getElementById('window').value;
        let size=string.length;
        val1=string;
        operator='/';
        document.getElementById('window').value+='/';
        isOperNotClicked=false; 
        isDotNotClicked=true;  
        }
    
}
let div1=document.getElementById('division');
    div1.addEventListener("click", division);

function one() {
    document.getElementById('window').value+= '1'
}
let odin=document.getElementById('one');
    odin.addEventListener("click", one);

function two() {
    document.getElementById('window').value+= '2'
}
let dva=document.getElementById('two');
    dva.addEventListener("click", two);

function three() {
    document.getElementById('window').value+= '3'
}
let tri=document.getElementById('three');
tri.addEventListener("click", three);

function four() {
    document.getElementById('window').value+= '4'
}
let chetire=document.getElementById('four');
    chetire.addEventListener("click", four);

function five() {
    document.getElementById('window').value+= '5'
}
let pyat=document.getElementById('five');
pyat.addEventListener("click", five);

function six() {
    document.getElementById('window').value+= '6'
}
let shest=document.getElementById('six');
    shest.addEventListener("click", six);

function seven() {
    document.getElementById('window').value+= '7'
}
let sem=document.getElementById('seven');
    sem.addEventListener("click", seven);

function eight() {
    document.getElementById('window').value+= '8'
}
let vosem=document.getElementById('eight');
    vosem.addEventListener("click", eight);

function nein() {
    document.getElementById('window').value+= '9'
}
let devyat=document.getElementById('nein');
    devyat.addEventListener("click", nein);

function nul(){
    let string=document.getElementById('window').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('window').value+= '.0'
    }
    else if((!size)||(string[size-1]=='/')||(string[size-1]=='+')||
    (string[size-1]=='*')||(string[size-1]=='-'))
    {
        document.getElementById('window').value+= '0.'
        isDotNotClicked=false
    }
    else document.getElementById('window').value+= 0;

}
let zero=document.getElementById('nul');
zero.addEventListener("click", nul);

function dot() {
    if(isDotNotClicked){
        document.getElementById('window').value+='.';
        isDotNotClicked=false;   
        }
}
let tochka=document.getElementById('dot');
    tochka.addEventListener("click", dot);

function backspace(){
    let string=document.getElementById('window').value;
    let size=string.length;
    string=string.substring(0,size-1);
    isOperNotClicked=true;
    isDotNotClicked=true;
   document.getElementById('window').value=string
}
let back=document.getElementById('backspace');
back.addEventListener("click", backspace);