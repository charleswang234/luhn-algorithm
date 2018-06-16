var luhnFunctions = require('../lib/luhn_algorithms.js');
var assert = require("chai").assert;

function sameArrayIndex(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  var index = 0;
  while (index < arrayA.length) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
    ++index;
  }
  return true;
}


describe("Luhn Algorithms Number Checker", function() {
  it("should return true if number is valid according to tWhe Luhn formula", function () {
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
    assert.isTrue(sameArrayIndex(correct, result));
  });
  it("should return true if the number 0 is changed to an array with 0 as its only element", function () {
      let number = 0;
      const correct = [0];
      let result = luhnFunctions.splitToDigits(number);
      assert.isTrue(sameArrayIndex(correct, result));
    });
});

describe("multipleEvenIndex checker", function() {
  it("should return true if [1] is unchanged when being multipled by two", function() {
    const oneElementArray = [1];
    let multipliedArray = luhnFunctions.multiplyEvenIndex(oneElementArray, 2);
    assert.isTrue(sameArrayIndex(oneElementArray, multipliedArray));
  });
  it("should return true if the given array has its even elements multiplied by two", function() {
    const numberArray = [2, 4, 3, 6, 2, 10, 3, 2];
    const multipliedArray = [2, 2, 3, 3, 2, 5, 3, 1];
    const result = luhnFunctions.multiplyEvenIndex(multipliedArray, 2);
    assert.isTrue(sameArrayIndex(numberArray, result));
  });
});

describe("conditionSubtractNine checker", function() {
  it("should return true if all elements over 9 have 9 subtracted to them", function() {
    const correct = [2, 5, 9, 2, 5, 7, 6, 7, 6];
    let numberArray = [11, 5, 18, 2, 14, 16, 15, 7, 6]
    let result = luhnFunctions.conditionSubtractNine(numberArray);
    assert.isTrue(sameArrayIndex(correct, result));
  });
});

describe("sumArr checker", function() {
  it("should return true if the sum of the array is true", function() {
    const correct = 49;
    const numberArray = [2, 5, 9, 2, 5, 7, 6, 7, 6];
    const result = luhnFunctions.sumArr(numberArray);
    assert.isTrue(sameArrayIndex(correct, result));
  });
});

