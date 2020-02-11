'use strict'
let a=63;

{
    if (a>=0 && a<20)
    console.log("Оценка студента F");

    if (a>=20 && a<40)
    console.log("Оценка студента E");

     if (a>=40 && a<60)
     console.log("Оценка студента D");

     if (a>=60 && a<75)
    console.log("Оценка студента C");

     if (a>=75 && a<90)
     console.log("Оценка студента B");

     if (a>=90 && a<=100)
     console.log("Оценка студента A");

     if (a<0 || a>100)
     console.log("Такой оценки не существует");
 
 }