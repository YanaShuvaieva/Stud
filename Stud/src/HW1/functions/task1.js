'use strict'
function getweekDay(date)
{
    let days = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
let days=new Date(2020, 1, 21);
// let a= getweekDay (days);

describe('task4_1 ',function(){
    it("Date", function() 
      {
        assert.equal(getweekDay(days), 'Fri');
      });
})