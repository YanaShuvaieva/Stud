function equal () {
    document.getElementById('window').value=eval(document.getElementById('window').value);
}
function delite () {
    document.getElementById('window').value=" "
}
function sum(){
    let string=document.getElementById('window').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('window').value=string+ '+'
}
function difference(){
    let string=document.getElementById('window').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('window').value=string+ '-'
}
function multiplication(){
    let string=document.getElementById('window').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('window').value=string+ '*'
}
function division(){
    let string=document.getElementById('window').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('window').value=string+ '/'
}
function one() {
    document.getElementById('window').value+= '1'
}
function two() {
    document.getElementById('window').value+= '2'
}
function three() {
    document.getElementById('window').value+= '3'
}
function four() {
    document.getElementById('window').value+= '4'
}
function five() {
    document.getElementById('window').value+= '5'
}
function six() {
    document.getElementById('window').value+= '6'
}
function seven() {
    document.getElementById('window').value+= '7'
}
function eight() {
    document.getElementById('window').value+= '8'
}
function nein() {
    document.getElementById('window').value+= '9'
}
function nul(){
    let string=document.getElementById('window').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('window').value+= '.0'
    }else
     if((size==0)||(string[size-1]=='/')||(string[size-1]=='+')||
    (string[size-1]=='*')||(string[size-1]=='-'))
    {
        document.getElementById('window').value+= '0.'
    }
    else
    document.getElementById('window').value+= 0
}
function dot() {
    document.getElementById('window').value+= '.'
}
function backspace(){
    let string=document.getElementById('window').value;
    let size=string.length;
    string=string.substring(0,size-1);
   document.getElementById('window').value=string
}