const findLongestWordLength = function (str) {
  const words = str.split(' ');
  let max = 0;

  words.forEach((word) => max = word.length > max ? word.length : max);

  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
