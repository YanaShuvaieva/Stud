'use strict'

function summ(){
let sum=0, quantity=0;
for (let i = 1; i < 99; i+=1)
{
    if (i%2==0) 
    {
        sum+=i;
        quantity++;
    }
}
    return [sum,quantity]
}


describe('task2_1 ',function(){
    it("Сумма четных чисел от 0 до 99; ожидаем 2450", function() 
      {
        assert.deepEqual(summ(),[ 2450, 49 ]);
      });
})