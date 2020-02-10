'use strict'
let n=+prompt('Введите число: ',''),i,min,max;
for (i = 1; ; i++)
    if(Math.sqrt(n)-i<1)break;
for(min=0 , max=n;;)
{
    if((min+max)/2>Math.trunc(Math.sqrt(n)))
        max=(min+max)/2; 
    else if((min+max)/2<Math.trunc(Math.sqrt(n)))
        min=(min+max)/2;
    else break;
}
alert(`Методом последовательного подбора корень квадратный числа ${n} равен ${i}`);
alert(`Методом бинарного поиска корень квадратный числа ${n} равен ${(min+max)/2}`);