'use strict'
let arr5=[6, 4, 3, 7, 9, 11];
function nechetnoe(arr5) {
let amount=0;
for(let i=0; i<6; i++)
{
    if(arr5[i]%2!=0) amount++;
}
return amount;
}

describe('task3_7 ',function(){
    it(`Колличество нечетных элементов ожидается 4`, function() 
      {
        assert.deepEqual(nechetnoe(arr5), 4);
    });
})