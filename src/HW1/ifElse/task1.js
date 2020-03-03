'use strict'
function kratnoe(a,b) {
if (a%2==0) return a*b;
return a+b;
}

describe('task1 ',function(){
    it("передаем a=3, b=12; ожидаем 15", function() 
      {
        assert.equal(kratnoe(3,12), 15);
      });
    it("передаем a=4, b=12; ожидаем 48", function() 
      {
        assert.equal(kratnoe(4,12), 48);
      });
})