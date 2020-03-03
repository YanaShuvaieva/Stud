function logic(val1,operator,val2) {
    switch (operator) {
        case '+':
            return val1 + val2; 
        case '-':
            return val1 - val2; 
        case '*':
            return val1 * val2; 
        case '/':
            return val1 / val2;
    }
}
module.exports.logic = logic;
