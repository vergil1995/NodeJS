////////////////////////////////////////// String
function altairString (){
    var myStr; // Change this line
    myStr = "I am a \"double quoted\" string inside \"double quotes\".";
    var myStr2 = 'I am a "double quoted" string inside "double quotes".';
    var myStr3 = "FirstLine\n\\SecondLine\\\r\nThirdLine";
    console.log(myStr);
    console.log(myStr2);
    console.log(myStr3);

    // Length
    var lastNameLength = 0;
    var lastName = "Lovelace";

    lastNameLength = lastName.length;   //8

    //Fix String
    var myFix = "Jello World";
    //myFix[0] = "H"; // Wrong
    myFix = "Hello World";

    //Find Last Character
    var lastName = "Lovelace";
    var lastLetterOfLastName = lastName[lastName.length - 1];   //e
}

///////////////////////////////////////////////////////////////////////////
//Array
function altairArray(){
//Fix Array
    var myArray = [1,2,3];
    myArray[2] = 0;         //1,2,0
//console.log("ARRAY");
// Mang nhieu chieu
    myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

    var myData = myArray[2][1]; //-> 8

// push vao cuoi array
    var ourArray = ["Stimpson", "J", "cat"];
    ourArray.push(["push", "end"]);   
    console.log(ourArray); 
// pop lay cuoi array
    var ourArray2 = [1,2,3];
    var removedFromOurArray = ourArray2.pop();
    console.log(ourArray2);
// shift = pop dau array
    var ourArray3 = [1,2,3];
    var removedFromOurArray = ourArray3.shift();
    console.log(ourArray3);
//unshift = push dau array
    var ourArray4 = [1,2,3];
    ourArray4.unshift(0);
    console.log(ourArray4);
}

altairArray();
// for
var myArr = [ 2, 3, 4, 5, 6];
// Only change code below this line
var total = 0;                                  // length = 5
for (var j = 0; j < myArr.length; j++) {        // stop tai i = length - 1 = 4 va myArr[4] = 6
  total += myArr[j];                            // total = 20;
}

//////// Mang nhieu chieu
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i=0; i<arr.length; i++) {
      for(var j=0; j<arr[i].length; j++){
        product *= arr[i][j]; 
      }
    }
    // Only change code above this line
    console.log(product);
    return product;
  }
  
  // Modify values below to test your code
  multiplyAll([[1,2],[3,4],[5,6,7]]);