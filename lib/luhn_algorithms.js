var modulo = 10;
var luhnFunction = {};

luhnFunction.splitToDigits = function (number) {
  var digits = [];
  if (number === 0) {
    digits.push(number);
    return number;
  }
  var newNumber = number;
  var remainder = newNumber % modulo;
  while (newNumber !== 0){
    remainder = newNumber % modulo;
    digits.push(remainder);
    newNumber = (newNumber - remainder) / modulo;
  }
  digits.reverse();
  console.log(digits);
  return digits;
};


luhnFunction.multiplyEvenIndex = function (arr, multiple) {
  for (var i = 0; i < arr.length; ++i) {
    if (i % 2 !== 0) {
     arr[i] *= multiple;
   }
 }
 return arr;
};


luhnFunction.conditionSubtractNine = function (arr) {
  for (var element of arr) {
    if (element > 9) {
      element -= 9;
    }
  }
  return arr;
};


luhnFunction.sumArr = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }
  return sum;
};

luhnFunction.luhnChecker = function(number) {
  var numDigits = this.splitToDigits(number);
  this.multiplyEvenIndex(numDigits, 2);
    //console.log(numDigits);
    this.conditionSubtractNine(numDigits);
    var sumNumDigits = this.sumArr(numDigits);
    return sumNumDigits % 10 === 0;
  };

  module.exports = luhnFunction;





// function splitToDigits(number) {
//   var digits = [];
//   var newNumber = number;
//   var remainder = newNumber % modulo;
//   while (newNumber !== 0){
//     remainder = newNumber % modulo;
//     digits.push(remainder);
//     newNumber = (newNumber - remainder) / modulo;
//   }
//   digits.reverse;
//   return digits;
// }

// function multiplyEvenIndex(arr, multiple) {
//   for (var i = 0; i < arr.length; ++i) {
//     if (i % 2 !== 0) {
//      arr[i] *= multiple;
//    }
//  }
//  return arr;
// }

// function conditionSubtractNine(arr) {
//   for (var element of arr) {
//     if (element > 9) {
//       element -= 9;
//     }
//   }
//   return arr;
// }

// function sumArr(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//   }
//   return sum;
// }

// module.exports = {
//   luhnChecker: function(number) {
//     var numDigits = this.splitToDigits(number);
//     this.multiplyEvenIndex(numDigits, 2);
//     //console.log(numDigits);
//     this.conditionSubtractNine(numDigits);
//     var sumNumDigits = this.sumArr(numDigits);
//     return sumNumDigits % 10 === 0;
//   }
// };