'use strict'
let arr6=[7, 4, 5, 6, 7, 8, 1, 4];
function mesta(arr6) {
if(n%2==0)
{
    for(let i=0; i<arr6.length/2; i++){
    let a=arr6[i]
    arr6[i]=arr6[i+(arr6.length/2)];
    arr6[i+(arr6.length/2)]=a;
    }
    
}

else
{
    for(let i=0; i<(arr6.length-1)/2; i++)
    {
    let a=arr6[i];
    arr6[i]=arr6[i+(arr6.length+1)/2]
    arr6[i+(arr6.length+1)/2]=a;
    }
    
}
return arr6;
}

describe('task3_8 ',function(){
    it(`Массив с изменённым порядком 7, 8, 1, 4, 7, 4, 5, 6`, function() 
      {
        assert.deepEqual(mesta(arr6), arr6);
    });
})