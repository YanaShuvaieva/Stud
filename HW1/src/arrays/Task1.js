'use strict'
let arr=[];
let n=5;
function randomInteger(min, max) 
{
    let rand=min-0.5+Math.random()*(max-min+1);
    return Math.round(rand);
}
for(let i=0; i<n; i++)
{
    arr[i]=randomInteger(0,100);
}
let min=arr[0];
console.log('Входящий массив:',arr);
for(let i=0; i<n; i++)
{
    if(arr[i]<min)
    {
    min=arr[i];
    }
}
console.log(`Минимальный элемент массива:${min}`);