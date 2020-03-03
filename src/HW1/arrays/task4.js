let n=7;
let arr2=[6, 45, 23, 62, 7, 10, 9];
function maxindex() {
let maxIndex=0;
let max=arr2[0];
for(let i=0; i<7; i++)
{
    if(arr2[i]>max)
    {
        max=arr2[i];
        maxIndex=i;
    }   
}
return maxIndex;
}

describe('task3_4 ',function(){
    it(`Индекс максимального элемента массива ожидается 3`, function() 
      {
        assert.deepEqual(maxindex(arr2), 3);
    });
})