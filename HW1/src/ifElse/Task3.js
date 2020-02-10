'use strict'
let a,b,c,S=0;
a = +prompt('Введите значение a');
b = +prompt('Введите значение b');
c = +prompt('Введите значение c');

if (a>0)
           {
              S=S+a;
           }
           if (b>0)
           {
              S=S+b;
           }
           if (c>0)
           {
              S=S+c;
           }
           if (S>0)
           {
               alert(" Сумма положительных чисел ="+S);
           }
           else
           alert("Положительных чисел нет");