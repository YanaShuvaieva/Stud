'use strict'
let arr8=[6, 4, 5, 1, 9, 12];

function insert(arr8) {
for (let i=0; i<6; i++)     //сортировка вставками
{
    let x=arr8[i];
    let j=i;
    while(j>0 && arr8[j-1]>x)
    {
        arr8[j]=arr8[j-1];
        j--;
    }
    arr8[j]=x;
}
return arr8;
}

describe('task3_10 ',function(){
    it(`Массив с изменённым порядком 1, 4, 5, 6, 9, 12`, function() 
      {
        assert.deepEqual(insert(arr8), arr8);
    });
})