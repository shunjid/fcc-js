var Person = function(firstAndLast) {
  let fullName=firstAndLast
  let full=fullName.split(" ");

  this.getFirstName = function() {
    return full[0];
  };
  this.getLastName = function() {
    return full[1];
  };
  this.setFirstName = function(newName) {
    full[0] = newName;
  };
  this.setLastName = function(newLast) {
    full[1] = newLast;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFullName = function(firstAndLast) {
    fullName=firstAndLast;
    full=fullName.split(" ");
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();