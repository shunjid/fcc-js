function chunkArrayInGroups(arr, size) {
  const stream = [];

  let item = 0;

  while(item < arr.length) {
    stream.push(arr.slice(item, item += size));
  }

  return stream;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);