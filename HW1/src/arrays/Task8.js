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