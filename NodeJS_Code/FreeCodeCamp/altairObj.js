// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
    "master": "Altair",
    "name": "Nick"
  };
// get properties   
var hatValue = testObj.hat;      
console.log(hatValue);
var drinkValue = testObj["the drink"];    
console.log(drinkValue);

var masterObj = "master";       
var nameMaster = testObj[masterObj];   
console.log(nameMaster);
// Update properties or Add new 
console.log("Before " + testObj.name);
testObj.name = "Nicky";
console.log("After " + testObj.name);

testObj.bark = "woof";  // testObj["bark"] = "woof";
console.log("New prop " + testObj.bark);
//Delete  properties
delete testObj.bark;

////////// Convert Switch-Case to Object
function phoneticLookup(val) {
    var result = "";
    // Only change code below this line
    var temp = {
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",  // co "" hay ko nhu nhau
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    
    // Only change code above this line
    return temp[val];
  }
  
  // Change this value to test
  console.log(phoneticLookup("charlie"));

/////////////////////////////////////////////////
// Check Property
// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
function checkObj(checkProp) {
// Your Code Here
if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
}
else {
    return "Not Found";
}

}

var check = checkObj("gift"); console.log(check);

//////////////  Nested Array
// Setup
var myPlants = [
    { 
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }  
  ];
  
  var secondTree = myPlants[1].list[1]; // pine
  console.log(secondTree);

  var styles = {
    style1: {
        width1: 100, 
        height1: 200, 
        backgroundColor1: 'green'
    },
    style2: {
        width2: 100, 
        height2: 200, 
        backgroundColor2: 'blue'
    },
    style3: {
        width3: 100, 
        height3: 200, 
        backgroundColor3: 'red'
    }
};

var temp = styles.style2.backgroundColor2; // blue
console.log(temp);