'use strict'
function koordinata(x,y){
if (y > 0 && x!=0)
{
    if (x > 0)
        return '1-я четверть';               
    return '2-я четверть';
}
if (y<0 && x!=0)
{
    if (x < 0)
    return '3-я четверть';
                  
    return '4-я четверть';
}
if ( x==0 || y==0 )
return 'Точка не принадлежит ни одной из четвертей';
}

describe('task2 ',function(){
    it("передаем x=1, y=3; ожидаем '1-я четверть'", function() 
      {
        assert.equal(koordinata(3,12), '1-я четверть');
      });
    it("передаем x=-1, y=10; ожидаем '2-я четверть'", function() 
      {
        assert.equal(koordinata(-1,10), '2-я четверть');
      });
      it("передаем x=-1, y=-5; ожидаем '3-я четверть'", function() 
      {
        assert.equal(koordinata(-1,-5), '3-я четверть');
      });
      it("передаем x=1, y=-8; ожидаем '4-я четверть'", function() 
      {
        assert.equal(koordinata(1,-8), '4-я четверть');
      });
})