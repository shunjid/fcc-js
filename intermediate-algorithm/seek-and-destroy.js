function destroyer(arr, ...args) {
  const destroyee = args;

  const filtered = arr.filter(function(value){
    return !destroyee.includes(value);
  });
  
  return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
