'use strict'
function getweekDay(date)
{
    let days = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
let days=new Date(prompt('Введите дату'));
alert(getweekDay(days));