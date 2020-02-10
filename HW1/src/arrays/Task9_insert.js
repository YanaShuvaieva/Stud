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
alert(arr);