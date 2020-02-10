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
for (let i=0; i<n; i++)     //сортировка пузырьком
{
    for(let j=0; j<n-i; j++)
    {
    if(arr[j]>arr[j+1])
        {
            let a=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=a;
        }
    }
}
alert(arr);