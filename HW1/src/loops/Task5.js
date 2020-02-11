'use strict'
let n=1674, s=0;
for (;;)
           
            {
              s+=n%10;
              n=Math.trunc(n/10);
              if(n==0)
                break;
            }

            
            console.log(" Сумма цифр равна ",s);