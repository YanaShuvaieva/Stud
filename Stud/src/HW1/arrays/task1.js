'use strict'
let arr=[5, 8, 12, 21, 19, 3, 4];
function minZ(arr){
let min=arr[0];
for(let i=0; i<7; i++)
{
    if(arr[i]<min)
    {
    min=arr[i];
    }
}
return min;
}

describe('task3_1 ',function(){
    it(`Минимальный элемент массива ожидается 3`, function() 
      {
        assert.deepEqual(minZ(arr), 3);
    });
})