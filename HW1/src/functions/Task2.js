'use strict'

let n=+prompt('Введите число от 0 до 999','');
function NumbString(num)
{
    let a=num%10, b=num%100, c=Math.trunc(num/100),
    X1=['один ','два ','три ','четыре ','пять ','шесть ','семь ','восемь ','девять '],
    X2=['одинадцать ','двенадцать ','тринадцать ','четырнадцать ','пятнадцать ','шестнадцать ','семнадцать ','восемнадцать ','девятнадцать '],
    X3=['десять ','двадцать ','тридцать ','сорок ','пятдесят ','шестьдесят ','семьдесят ','восемьдесят ','девяносто '],
    X4=['сто ','двести ','триста ','четыреста ','пятьсот ','шестьсот ','семьсот ','восемьсот ','девятьсот '], res=' ';
    if(num>=100) 
        res+=X4[c-1];
    if(b>10&&b<20) 
        res=res+X2[b-11];
    else if(b==10||b>19)
    {
        res+=X3[Math.trunc(b/10)-1];
        if(a!=0) res=res+X1[a-1]; 
    }
    else if(b<10)
    {
        if(a!=0)
        res=res+X1[a-1];
    }
    return res;
}

alert(NumbString(n));