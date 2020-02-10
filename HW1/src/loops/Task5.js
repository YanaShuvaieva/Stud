'use strict'
let n=+prompt('Введите число: ',''),s=0;
for (;;)
           
            {
              s+=n%10;
              n=Math.trunc(n/10);
              if(n==0)
                break;
            }

            
        alert(" Сумма цифр равна "+s);