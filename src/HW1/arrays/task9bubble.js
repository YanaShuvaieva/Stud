'use strict'
let arr7=[5, 3, 7, 8, 10, 6];
function bubble(arr7) {
for (let i=0; i<6; i++)     //сортировка пузырьком
{
    for(let j=0; j<6-i; j++)
    {
    if(arr7[j]>arr7[j+1])
        {
            let a=arr7[j];
            arr7[j]=arr7[j+1];
            arr7[j+1]=a;
        }
    }
}
return arr7;
}

describe('task3_9 ',function(){
    it(`Массив с изменённым порядком 3, 5, 6, 7, 8, 10`, function() 
      {
        assert.deepEqual(bubble(arr7), arr7);
    });
})