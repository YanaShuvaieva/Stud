'use strict'
function cifra(n) {
let s=0;
for (;;)
           
{
  s+=n%10;
  n=Math.trunc(n/10);
  if(n==0)
  break;
}
return s;          
}

describe('task2_5 ',function(){
  it("Сумма цифр 1629 ожидается 18", function() 
    {
      assert.equal(cifra(1629), 18);
    });
  it("Сумма цифр числа 16235 ожидается 17", function() 
    {
      assert.equal(cifra(16235), 17);
    });
})