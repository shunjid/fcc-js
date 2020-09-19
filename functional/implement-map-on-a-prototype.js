// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  const newArray = [];
  
  this.forEach(function(value){
    newArray.push(callback(value));
  });

  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);
