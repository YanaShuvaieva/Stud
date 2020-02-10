'use strict'
let n=+prompt('Введите число: ',''),s="";
for(;;)
{
    s+=(n%10);
    n=Math.trunc(n/10);
    if(n==0)break;
}
alert(s);