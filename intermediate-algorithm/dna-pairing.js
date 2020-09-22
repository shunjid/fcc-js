function pairElement(str) {
  const pair = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A'
  }

  const splitted = str.split('');
  const allPair = [];

  splitted.forEach((strand) => {
    allPair.push([
      strand,
      pair[strand]
    ]);
  });

  return allPair;
}

console.log(pairElement("ATCGA"));
