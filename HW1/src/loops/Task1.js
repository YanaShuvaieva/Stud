'use strict'
let sum = 0, quantity = 0;
           
            for (let i = 1; i < 99; i+=1)
            {
                if (i%2==0) 
                {
                    sum+=i;
                    quantity++;
                }


            }
            
            console.log("Сумма чётных чисел от 1 до 99: ",sum);
            console.log("Количество чётных чисел от 1 до 99: ",quantity);