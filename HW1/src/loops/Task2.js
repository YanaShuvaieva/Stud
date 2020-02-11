'use strict'
let a=8, s=0;
for (let i = 1; i <= a; i++)
            {
            
            if (a%i==0)
            s++;

            }
            
            if (s==2)
            console.log(`Число является простым`);
            
            if (s>2 || a<2)
            console.log(`Число не является простым`);