'use strict'
let arr9=[5, 3, 7, 9, 13, 11, 26];
function select() {
for (let i=0; i<7; i++)     //сортировка выбором
{
    let a=i;
    for(let j=i+1; j<7; j++)
    {
        if(arr9[j]<arr9[a])
        a=j;
    }
    let x=arr9[a];
    arr9[a]=arr9[i];
    arr9[i]=x;
}
return arr9;
}

describe('task3_11 ',function(){
    it(`Массив с изменённым порядком 3, 5, 7, 9, 11, 13, 26`, function() 
      {
        assert.deepEqual(select(arr9), arr9);
    });
})