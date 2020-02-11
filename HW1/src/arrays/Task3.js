'use strict'
let n=5;
let arr=[];
let minIndex=0;
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
let min=arr[0];
for(let i=0; i<n; i++)
{
    if(arr[i]<min)
    {
        min=arr[i];
        minIndex=i;
    }   
}
console.log(`Индекс минимального элемента ${minIndex}`);