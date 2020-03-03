'use strict'
let arr1=[13, 8, 5, 11, 25, 23, 7];
function maximum(arr1) {
let max=arr1[0];
for(let i=0; i<7; i++)
{
    if(arr1[i]>max)
    {
    max=arr1[i];
    }
}
return max;
}

describe('task3_2 ',function(){
    it(`Максимальный элемент массива ожидается 25`, function() 
      {
        assert.deepEqual(maximum(arr1), 25);
    });
})
