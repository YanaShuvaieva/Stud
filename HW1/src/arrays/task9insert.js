'use strict'
let n=7;
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
console.log('Входящий массив:',arr);
for (let i=0; i<n; i++)     //сортировка вставками
{
    let x=arr[i];
    let j=i;
    while(j>0 && arr[j-1]>x)
    {
        arr[j]=arr[j-1];
        j--;
    }
    arr[j]=x;
}
console.log(arr);