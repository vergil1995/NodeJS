
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var index = -1;
  for(var i=0; i<contacts.length; i++){
    if(contacts[i].firstName == firstName){
      index = i;
      //return index;
      break;
    }
  }
  if(index == -1){
    return "No such contact";
  }
  else {
    switch(prop){
      case "lastName":
        return contacts[index].lastName;
      case "number":
        return contacts[index].number;
      case "likes":
        return contacts[index].likes;
      default:
        return "No such property";
    }
  }
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));