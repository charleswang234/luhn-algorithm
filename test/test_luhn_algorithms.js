var luhnFunctions = require('../lib/luhn_algorithms.js');
var assert = require("chai").assert;

describe("Luhn Algorithms Number Checker", function() {
  it("should return true if number is valid according to the Luhn formula", function () {
    var number = 2222222222;
    var result = luhnFunctions.luhnChecker(number);
    assert.isTrue(result);
  });
  it("should return false if number is not valid according to the Luhn formula", function () {
    var number = 1111111111;
    var result = luhnFunctions.luhnChecker(number);
    assert.isFalse(result);
  });
  //assert(true, "This is false");
});


describe("splitToDigits checker", function() {
  it("should return true if number is split into its digits", function() {
    var number = 591239342;
    var correct = [5, 9, 1, 2, 3, 9, 3, 4, 2];
    var result = luhnFunctions.splitToDigits(number);
    assert.equal(correct, result);
  });
});