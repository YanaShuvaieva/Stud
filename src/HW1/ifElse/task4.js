'use strict'
let a,b,c;
function abc(a,b,c) {
    
    if(a*b*c>(a+b+c))
    return a*b*c+3;
    return a+b+c+3; 
}

describe('task4 ',function(){
    it("передаем a=1,b=1,c=1; ожидаем 6", function() 
      {
        assert.equal(abc(1,1,1), 6);
      });
      it("передаем a=5,b=2,c=3; ожидаем 33", function() 
      {
        assert.equal(abc(5,2,3), 33);
      });
 })