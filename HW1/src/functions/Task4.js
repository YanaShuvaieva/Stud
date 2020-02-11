'use strict'
function rasstoyanie(a,b)  
{
    return Math.abs(a-b);
}
function hypotenuza(a,b)
{
    return Math.sqrt((a**2)+(b**2));
}
let x1=3, x2=9,
y1=-3, y2=-6;
console.log('Расстояние между точками',hypotenuza(rasstoyanie(x1,x2), rasstoyanie(y1,y2)));