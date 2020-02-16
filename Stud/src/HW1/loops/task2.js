'use strict'
function prostoe (a) {
let s=0;
for (let i = 1; i <= a; i++)
{
            
    if (a%i==0)
    s++;
}
            
if (s==2)
return `Число является простым`;
            
if (s>2 || a<2)
return `Число не является простым`;
}

describe('task2_2 ',function(){
    it("Число 3 является простым", function() 
      {
        assert.deepEqual(prostoe(3), 'Число является простым');
      });
      it("Число 10 не является простым", function() 
      {
        assert.deepEqual(prostoe(10), 'Число не является простым');
    });

})