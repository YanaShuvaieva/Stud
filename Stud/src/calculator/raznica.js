function difference(a,b) {
    if((typeof a===typeof 1) && (typeof b=== typeof 1)) {

        return a-b;
    }
    return null;
}


describe("Вычитание", function() {
    describe("Численная проверка вычитания", function() {
    function Test3(a,b){
        let afterDiff = a-b;
        it(`${a} - ${b} = ${afterDiff}`, function(){
            assert.equal(difference(a,b),afterDiff);
        });

    }

        for( let a=0; a<=5; a++) {
            for(let b=0; b<=5; b++){
        Test3(a,b);} }

    });

    describe("Проверка типов в вычитании", function() {
        it("передаем a=undefined, b=3", function() {
            assert.equal(difference(undefined,3), undefined);
        });
        it("передаем a=4, b=undefined", function() {
            assert.equal(difference(4,undefined), undefined);
        });
        it("передаем a=null, b=7", function() {
            assert.equal(difference(null,7), null);
        });
        it("передаем a=11, b=null", function() {
            assert.equal(difference(11,null), null);
        });
        it("передаем a=undefined, b=null", function() {
            assert.equal(difference(undefined,null), undefined);
        });
        it("передаем a=null, b=undefined", function() {
            assert.equal(difference(null,undefined), undefined);

        });
    });
});