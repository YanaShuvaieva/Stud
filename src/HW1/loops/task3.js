'use strict'

function posled(n) {
let i;
for (i = 1; ; i++)
if(Math.sqrt(n)-i<1)break;
return i;
}
function binar(n) {
let min, max;
for(min=0 , max=n;;)
{
    if((min+max)/2>Math.trunc(Math.sqrt(n)))
        max=(min+max)/2; 
    else if((min+max)/2<Math.trunc(Math.sqrt(n)))
        min=(min+max)/2;
    else break;
}
return (min+max)/2;
}

describe('task2_3 ',function(){
    it("Корень квадратный числа 10 ожидаем 3(последовательный метод)", function() 
      {
        assert.equal(posled(10), 3);
      });
    it("Корень квадртаный числа 10 ожидаем 3 (бинарный метод)", function() 
      {
        assert.equal(binar(10), 3);
      });
})