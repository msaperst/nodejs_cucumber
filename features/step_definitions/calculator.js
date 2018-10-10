const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber')
const Calculator = require('../../lib/calculator');

let calculator;
let input;
let input1;
let input2;
let result;

Given('the input {string}', function (string, callback) {
    calculator = new Calculator();
    input = string;
    callback();
});

Given('the numbers {int} and {int}', function (int1, int2, callback) {
    calculator = new Calculator();
    input1 = int1;
    input2 = int2;
    callback();
});

When('the calculator is run', function (callback) {
    result = calculator.run(input);
    callback();
});

When('they are multiplied together', function (callback) {
    result = calculator.multiply(input1, input2);
    callback();
});

When('the first is divided by the second', function (callback) {
    result = calculator.divide(input1, input2);
    callback();
});

Then('the output should be {int}', function (string, callback) {
    assert.equal(result, string);
    callback();
});

Then('the result should be {int}', function (int, callback) {
    assert.equal(result, int)
    callback();
});
