function confirmEnding(str, target) {
  const targetLength = target.length;
  const start = str.length - targetLength;
  const end = str.length;
  const subStr = str.substring(start, end);

  return subStr === target;
}

console.log(confirmEnding("Bastian", "n"));
