'use strict'
let arg=[4, 8, 35, 13, 78, 54, 2];
function minindex(arg) {

let minIndex=0;
let min=arg[0];
for(let i=0; i<7; i++)
{
    if(arg[i]<min)
    {
        min=arg[i];
        minIndex=i;
    }   
}
return minIndex;
}

describe('task3_3 ',function(){
    it(`Индекс минимального элемента массива ожидается 6`, function() 
      {
        assert.deepEqual(minindex(arg), 6);
    });
})