function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: () => console.log('yam yam yam'),
  describe: () => console.log(`My name is ${this.name}`),
};
