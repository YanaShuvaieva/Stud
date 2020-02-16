function multiplic(a,b) {
    if((typeof a===typeof 1) && (typeof b=== typeof 1)) {

        return a*b;
    }
    return null;
}


describe("Произведение", function() {
    describe("Численная проверка произведения", function() {
    function Test2(a,b){
        let afterMultiplic = a*b;
        it(`${a} * ${b} = ${afterMultiplic}`, function(){
            assert.equal(multiplic(a,b),afterMultiplic);
        });

    }

        for( let a=0; a<=5; a++) {
            for(let b=0; b<=5; b++){
        Test2(a,b);} }

    });

    describe("Проверка типов в произведении", function() {
        it("передаем a=undefined, b=3", function() {
            assert.equal(multiplic(undefined,3), undefined);
        });
        it("передаем a=4, b=undefined", function() {
            assert.equal(multiplic(4,undefined), undefined);
        });
        it("передаем a=null, b=7", function() {
            assert.equal(multiplic(null,7), null);
        });
        it("передаем a=11, b=null", function() {
            assert.equal(multiplic(11,null), null);
        });
        it("передаем a=undefined, b=null", function() {
            assert.equal(multiplic(undefined,null), undefined);
        });
        it("передаем a=null, b=undefined", function() {
            assert.equal(multiplic(null,undefined), undefined);

        });
    });
});