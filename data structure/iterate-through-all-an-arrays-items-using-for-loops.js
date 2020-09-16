function filteredArray(arr, elem) {
  let newArr = [];
  
  for(const item of arr) {
    if(!item.includes(elem))
      newArr.push(item);
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
