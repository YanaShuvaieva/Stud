'use strict'
let n=6;
let arr=[];
let amount=0;
function randomInteger(min, max) 
{
    let rand=min-0.5+Math.random()*(max-min+1);
    return Math.round(rand);
}
for(let i=0; i<n; i++)
{
    arr[i]=randomInteger(0,100);
}
console.log('Входящий массив:',arr);
for(let i=0; i<n; i++)
{
    if(arr[i]%2!=0)amount++;
}
console.log(`Колличество нечетных элементов массива ${amount}`);