function suma(a,b) {
    if((typeof a===typeof 1) && (typeof b=== typeof 1)) {

        return a+b;
    }
    return null;
}


describe("Сумма", function() {
    describe("Численная проверка суммы", function() {
    function Test1(a,b){
        let afterSum = a+b;
        it(`${a} + ${b} = ${afterSum}`, function(){
            assert.equal(suma(a,b),afterSum);
        });

    }

        for( let a=0; a<=5; a++) {
            for(let b=0; b<=5; b++){
        Test1(a,b);} }

    });

    describe("Проверка типов в сумме", function() {
        it("передаем a=undefined, b=3", function() {
            assert.equal(suma(undefined,3), undefined);
        });
        it("передаем a=4, b=undefined", function() {
            assert.equal(suma(4,undefined), undefined);
        });
        it("передаем a=null, b=7", function() {
            assert.equal(suma(null,7), null);
        });
        it("передаем a=11, b=null", function() {
            assert.equal(suma(11,null), null);
        });
        it("передаем a=undefined, b=null", function() {
            assert.equal(suma(undefined,null), undefined);
        });
        it("передаем a=null, b=undefined", function() {
            assert.equal(suma(null,undefined), undefined);

        });
    });
});