let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  const members = [ 'Alan', 'Jeff', 'Sarah',  'Ryan'];
  let present = 0;
  
  members.forEach((member) => present = member in users ? present + 1: present);

  return present === members.length;
}

console.log(isEveryoneHere(users)); 
