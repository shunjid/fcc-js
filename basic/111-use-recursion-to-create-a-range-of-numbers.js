const rangeOfNumbers = function(startNum, endNum) {
  if(startNum > endNum)
    return [];
  else
    return rangeOfNumbers(startNum, endNum - 1).concat([endNum]);
};