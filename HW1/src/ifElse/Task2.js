'use strict'
let x=2, y=-3;
if (y > 0 && x!=0)
{
    if (x > 0)
        console.log(` 1-я четверть`);
    else               
        console.log(` 2-я четверть`);
}
if (y<0 && x!=0)
{
    if (x < 0)
        console.log(` 3-я четверть`);
    else               
        console.log(`4-я четверть`);
}
if ( x==0 || y==0 )
console.log(`Точка не принадлежит ни одной из четвертей`);