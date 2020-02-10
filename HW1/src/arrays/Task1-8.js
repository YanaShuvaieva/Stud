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
max=[0];
for(let i=0; i<n; i++)
{
    if(arr[i]>max)
    {
    max=arr[i];
    maxindex=i;
    }
}
alert(`Максимальный элемент массива:${max} с индексом ${maxindex}`);
for(let i=0; i<n; i++)
{
    if(arr[i]<min)
    {
    min=arr[i];
    minindex=i;
    }
}
alert(`Минимальный элемент массива:${min} с индексом ${minindex}`);
for(let i=0; i<n; i++)
{
    if(i%2!=0)sum+=arr[i]
    if(arr[i]%2!=0)amount++;
}
alert(`Сумма элементов массива с нечетными индексами ${sum}`);
alert(`Колличество нечетных элементов массива ${amount}`);
alert (`Реверсный массив - ${arr.reverse()}`);
arr.reverse();

if(n%2==0)
{
    for(let i=0; i<n/2; i++){
    let a=arr[i]
    arr[i]=arr[i+(n/2)];
    arr[i+(n/2)]=a;
    }
    
}

else
{
    for(let i=0; i<(n-1)/2; i++)
    {
    let a=arr[i];
    arr[i]=arr[i+(n+1)/2]
    arr[i+(n+1)/2]=a;
    }
    
}
alert('Массив с изменением первой и второй половины массива:'+arr);