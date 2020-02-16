'use strict'
function fact(n) {
let s=1;
for (let i = 1; i<=n; i++)
{
               
    s*=i;
}
return s;
}

describe('task2_4 ',function(){
    it("Факториал числа 4 равен 24", function() 
      {
        assert.equal(fact(4), 24);
      });
    it("Факториал числа 5 равен 120", function() 
      {
        assert.equal(fact(5), 120);
      });
})