'use strict'
let n=+prompt('Введите размер массива:');
let arr=[];
let min, max, maxindex=0, minindex=0, sum=0, amount=0;
function randomInteger(min, max) 
{
    let rand=min-0.5+Math.random()*(max-min+1);
    return Math.round(rand);
}
for(let i=0; i<n; i++)
{
    arr[i]=randomInteger(0,100);
}
alert('Входящий массив:'+arr);
min=arr[0];
for(let i=0; i<n; i++)
{
    if(arr[i]<min)
    {
    min=arr[i];
    }
}
alert(`Минимальный элемент массива:${min}`);