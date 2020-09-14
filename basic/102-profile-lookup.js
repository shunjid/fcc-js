// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = function (name, prop) {
  const index = contacts.findIndex((contact) => contact.firstName == name);
  if (index == -1) return "No such contact";
  else
    return contacts[index].hasOwnProperty(prop)
      ? contacts[index][prop]
      : "No such property";
};

console.log(lookUpProfile("Akira", "likes"));
