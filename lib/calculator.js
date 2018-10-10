/**
 * @function
 *
 * simple calculator
 */
var calculator = module.exports = function() {};
/**
 * simple calculate implementation
 * @param  String expression an input expression to evaluate
 * @return String            result of expression evaluation
 */
calculator.prototype.run = function(expression) {
    return eval(expression);
};

calculator.prototype.multiply = function(int1, int2) {
    return int1 * int2;
};

calculator.prototype.divide = function(int1, int2) {
    return int1 / int2;
};