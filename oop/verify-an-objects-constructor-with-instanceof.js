function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
const myHouse = new House(5);
console.log(myHouse instanceof House);