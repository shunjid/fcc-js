/*
*
* Before: [1,2,3,4,5]
* 1
* After: [2,3,4,5,6]
*
*/

const nextInLine = function (arr, item) {
  arr.push(item);
  const next = arr.shift();
  return next;
};

const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
