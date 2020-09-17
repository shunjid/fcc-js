function frankenSplice(arr1, arr2, n) {
  const final = [...arr2];

  arr1.forEach((element, index) => final.splice(n + index, 0, element))

  return final;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
