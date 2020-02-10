'use strict'
let n=+prompt('Введите размер массива:');
let arr=[];
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
for (let i=0; i<n; i++)     //сортировка выбором
{
    let a=i;
    for(let j=i+1; j<n; j++)
    {
        if(arr[j]<arr[a])
        a=j;
    }
    let x=arr[a];
    arr[a]=arr[i];
    arr[i]=x;
}
alert(arr);