////// Global va Local var
var outerWear = "T-Shirt";  // nen tao bien global ntn
function myOutfit() {
  var outerWear = "sweater";  //local neu cung ten dc uu tien, pham vi trong ham
  //outerWear = "sweater"       // global, neu ko khoi tao thi auto dc tao la global do ko co "var"
  console.log("trong ham " + outerWear);
  return outerWear;
}
myOutfit();
console.log("ra ngoai ham " + outerWear);

////// NextInLine Queue. Them vao cuoi, xoa dau
var testArr = [1,2,3,4,5];
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  item = arr.shift();
  return item;  // Change this line
}

console.log("Before: " + testArr); //JSON.stringify(testArr)
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

/////////////// If-Else /////////////////
//    1   ==  '1'    // true        '' va "" same
//    3   === "3"    // false
//    1   ==  true   // true
//    1   === true   // false       // switch luon check ===
/////////////////////////////////////////
//    '7' <= 7  // true
/////////////////////////////////////////
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val===1) {

  // Only Change Code Above this Line

    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
var string = testStrictNotEqual(true);
console.log(string); //-> not equal
///////////////////////////////////////////
