function whatIsInAName(collection, source) {
  var arr = [];
  const sourceKeys = Object.keys(source);

  collection.forEach((eachCollection) => {
    if(sourceKeys.every((key) => source[key] === eachCollection[key])){
      arr.push(eachCollection);
    }
  });

  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
