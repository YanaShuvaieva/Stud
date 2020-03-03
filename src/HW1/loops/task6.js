'use strict'
function obratnoe(n) {
let s="";
for(;;)
{
    s+=(n%10);
    n=Math.trunc(n/10);
    if(n==0)break;
}
return s;
}

describe('task2_6 ',function(){
    it("Обратное 1629 ожидается 9261", function() 
      {
        assert.equal(obratnoe(1629), 9261);
      });
    it("Обратное 16235 ожидается 53261", function() 
      {
        assert.equal(obratnoe(16235), 53261);
      });
  })