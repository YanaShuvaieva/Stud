let n=+prompt('Введите размер массива:');
let arr=[];
let maxIndex=0;
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
let max=arr[0];
for(let i=0; i<n; i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
        maxIndex=i;
    }   
}
alert(`Индекс минимального элемента ${maxIndex}`);