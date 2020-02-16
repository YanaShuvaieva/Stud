function division(a,b) {
    if((typeof a===typeof 1) && (typeof b=== typeof 1)) {

        return a/b;
    }
    return null;
}


describe("Деление", function() {
    describe("Численная проверка деления", function() {
    function Test4(a,b){
        let afterDiv = a/b;
        it(`${a} / ${b} = ${afterDiv}`, function(){
            assert.equal(division(a,b),afterDiv);
        });

    }

        for( let a=1; a<=5; a++) {
            for(let b=0; b<=5; b++){
        Test4(a,b);} }

    });

    describe("Проверка типов в делении", function() {
        it("передаем a=undefined, b=3", function() {
            assert.equal(division(undefined,3), undefined);
        });
        it("передаем a=4, b=undefined", function() {
            assert.equal(division(4,undefined), undefined);
        });
        it("передаем a=null, b=7", function() {
            assert.equal(division(null,7), null);
        });
        it("передаем a=11, b=null", function() {
            assert.equal(division(11,null), null);
        });
        it("передаем a=undefined, b=null", function() {
            assert.equal(division(undefined,null), undefined);
        });
        it("передаем a=null, b=undefined", function() {
            assert.equal(division(null,undefined), undefined);

        });
    });
});