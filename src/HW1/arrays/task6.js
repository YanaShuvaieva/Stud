'use strict'
let arr4=[5, 7, 4, 3, 2, 1];
function massive(arr4) {
if ( arr4.length % 2 ) {
for(let i=0; i<(arr4.length - 1)/2; i++) {
    let s = arr4[i];
    arr4[i]=arr4[(arr4.length-1)-i];
    arr4[(arr4.length-1) - i] = s;
} 
}
else {
    for(let i=0; i<arr4.length/2; i++) {
    let s = arr4[i];
    arr4[i]=arr4[(arr4.length-1)-i];
    arr4[(arr4.length-1) - i] = s;
    }
}
return arr4;
}

describe('task3_6 ',function(){
    it(`Реверсный массив 1,2,3,4,7,5 `, function() 
      {
        assert.deepEqual(massive(arr4), arr4);
    });
})