function uniteUnique(arr, ...args) {
  const additional = args;

  additional.forEach((elem) => {
    arr = arr.concat(elem.filter((e) => {
      return arr.indexOf(e) === -1;
    }));
  });

  return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
