'use strict'
function rasstoyanie(a,b)  
{
    return Math.abs(a-b);
}
function hypotenuza(a,b)
{
    return Math.sqrt((a**2)+(b**2));
}
let x1=+prompt('Введите значение х для первой точки'), x2=+prompt('Введите значение х для второй точки'),
y1=+prompt('Введите значение у для первой точки'), y2=+prompt('Введите значение у для второй точки');
alert('Расстояние между точками'+hypotenuza(rasstoyanie(x1,x2), rasstoyanie(y1,y2)));