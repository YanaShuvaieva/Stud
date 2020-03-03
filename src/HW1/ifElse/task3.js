'use strict'
function summa(a,b,c) {
   let s=0;
if (a>0) s+=a;
if (b>0) s+=b;
if (c>0) s+=c;
   return s;        
}

describe('task3 ',function(){
   it("передаем a=1,b=2,c=3; ожидаем 6", function() 
     {
       assert.equal(summa(1,2,3), 6);
     });
   it("передаем a=-1,b=2,c=3; ожидаем 5", function() 
     {
       assert.equal(summa(-1,2,3), 5);
     });
     it("передаем a=1,b=-2,c=3; ожидаем 4", function() 
     {
       assert.equal(summa(1,-2,3), 4);
     });
     it("передаем a=1,b=2,c=-3; ожидаем 3", function() 
     {
       assert.equal(summa(1,2,-3), 3);
     });
     it("передаем a=-1,b=-2,c=3; ожидаем 0", function() 
     {
       assert.equal(summa(-1,-2,3), 3);
     });
     it("передаем a=-1,b=2,c=-3; ожидаем -2", function() 
     {
       assert.equal(summa(-1,2,-3), 2);
     });
     it("передаем a=1,b=-2,c=-3; ожидаем 1", function() 
     {
       assert.equal(summa(1,-2,-3), 1);
     });
     it("передаем a=-1,b=-2,c=-3; ожидаем 0", function() 
     {
       assert.equal(summa(-1,-2,-3), 0);
     });
})