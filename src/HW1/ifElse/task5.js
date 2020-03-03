'use strict'

function grade (a) {
    if (a>=0 && a<20)
    return 'Оценка студента F';

    if (a>=20 && a<40)
    return 'Оценка студента E';

     if (a>=40 && a<60)
     return 'Оценка студента D';

     if (a>=60 && a<75)
    return 'Оценка студента C';

     if (a>=75 && a<90)
     return 'Оценка студента B';

     if (a>=90 && a<=100)
     return 'Оценка студента A';

     if (a<0 || a>100)
     return 'Такой оценки не существует';
 
 }

 describe('task5 ',function(){
    it("передаем a=1; 'Оценка студента F'", function() 
      {
        assert.equal(grade(1), 'Оценка студента F');
      });
      it("передаем a=5,b=2,c=3; ожидаем 'Оценка студента E'", function() 
      {
        assert.equal(grade(30), 'Оценка студента E');
      });
      it("передаем a=55; ожидаем 'Оценка студента D'", function() 
      {
        assert.equal(grade(55), 'Оценка студента D');
      });
      it("передаем a=74; ожидаем 'Оценка студента C'", function() 
      {
        assert.equal(grade(74), 'Оценка студента C');
      });
      it("передаем a=80; ожидаем 'Оценка студента B'", function() 
      {
        assert.equal(grade(80), 'Оценка студента B');
      });
      it("передаем a=95; ожидаем 'Оценка студента A'", function() 
      {
        assert.equal(grade(95), 'Оценка студента A');
      });
      it("передаем a=120; ожидаем 'Такой оценки не существует'", function() 
      {
        assert.equal(grade(120), 'Такой оценки не существует');
      });
      it("передаем a=-2; ожидаем 'Такой оценки не существует'", function() 
      {
        assert.equal(grade(-2), 'Такой оценки не существует');
      });
      it("передаем a=undefined; ожидаем undefined", function() 
      {
        assert.equal(grade(undefined), undefined);
      });
      it("передаем a=null; ожидаем 'Оценка студента F'", function() 
      {
        assert.equal(grade(null), 'Оценка студента F');
      });
 })