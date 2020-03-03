'use strict'
let arr3=[7, 87, 3, 5, 1, 2, 11, 26];
function summel(arr3) {
let sum=0;
for(let i=0; i<8; i++)
{
    if(i%2!=0)sum+=arr3[i];
}
return sum;
}

describe('task3_5 ',function(){
    it(`Сумма элементов с нечетными индексами ожидается 120`, function() 
      {
        assert.deepEqual(summel(arr3), 120);
    });
})