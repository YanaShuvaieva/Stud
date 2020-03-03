const { logic } = require('../logic');

describe("Проверка логики калькулятора", function() {
    it("4 + 3 ожидается 7", function() {
        assert.equal(logic(4,'+',3), 7);
});
    it("11 - 4 ожидается 7", function() {
        assert.equal(logic(11,'-',4), 7);
});
    it("9/0.3 ожидается 30", function() {
        assert.equal(logic(9,'/',0.3), 30);
});
    it("10.5 * 2 ожидается 21", function() {
        assert.equal(logic(10.5,'*',2), 21);
});
    it("90 * .2 ожидается 18 ", function() {
        assert.equal(logic(90,'*',.2), 18);

});

    });