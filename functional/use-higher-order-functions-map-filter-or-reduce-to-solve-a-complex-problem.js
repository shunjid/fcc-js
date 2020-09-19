const squareList = (arr) => {
  return arr.filter((value) => {
    return value % 1 === 0 && value > 0;
  }).map((value) => {
    return value * value;
  });
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
