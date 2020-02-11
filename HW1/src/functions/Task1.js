'use strict'
function getweekDay(date)
{
    let days = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
let days=new Date(2020, 2, 21);
console.log(getweekDay(days));