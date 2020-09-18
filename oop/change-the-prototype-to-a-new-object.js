function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: () => console.log('yam yam yam'),
  describe: () => console.log(`My name is ${this.name}`),
};
