function findElement(arr, func) {
  let result = undefined;

  for(const elem of arr) {
    if(func(elem)) {
      result = elem;
      break;
    }
  }

  return result;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
