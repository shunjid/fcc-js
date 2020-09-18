const Dog = function (name, color) {
  [this.name, this.color, this.numLegs] = [name, color, 4];
}

const terrier = new Dog('hal', '#FFFFFF');