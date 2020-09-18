const Bird = function (name) {
  this.name = name;
  this.numLegs = 2;
}

const canary = new Bird("Tweety");
const ownProps = [];
// Only change code below this line
for(const property in canary)
  if(canary.hasOwnProperty(property))
    ownProps.push(property);

console.log(ownProps)