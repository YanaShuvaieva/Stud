'use strict'
let n=1785,s="";
for(;;)
{
    s+=(n%10);
    n=Math.trunc(n/10);
    if(n==0)break;
}
console.log(s);