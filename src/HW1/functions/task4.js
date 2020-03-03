'use strict'
function rasstoyanie(a,b)  
{
    return Math.abs(a-b);
}
function hypotenuza(a,b)
{
    return Math.sqrt((a**2)+(b**2));
}


describe('task4_4 ',function(){
    it("Hypotenusa", function() 
      {
        assert.equal(hypotenuza(3,4), 5);
      });
      it("Rasstoyanie", function() 
      {
        assert.equal(rasstoyanie(3,4), 1);
      });
})