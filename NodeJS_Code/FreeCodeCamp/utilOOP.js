// map
var oldArray = [1,2,3,4,5];
var newArray = oldArray.map(function(val){
    return val+3;
});
console.log(oldArray);  // 1 2 3 4 5     -> mang cu giu nguyen
console.log(newArray);  // 4 5 6 7 8     -> tao mang moi
////////////////////////////////////////////////////////////////////////////////
// reduce
////co 2 argument (là đối số # tham số) la:
// + accumulator (previousVal):   
// + the current value (currentVal): giá trị phần tử kế tiếp đang lặp qua
// + đối số optional thiết lập giá trị ban đầu của accumulator. 
// Nếu = 0 thì accumulator = phần từ đầu tiền, current = phần từ thứ 2
var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal + currentVal;
}, 0);  // đối số này = 0
console.log(singleVal); // 30
////////////////////////////////////////////////////////////////////////////////
// filter
var oldArray2 = [1,2,3,4,5,6,7,8,9,10];
var newArray2 = oldArray2.filter(function(val){
  return val < 6;
});
console.log(oldArray2);     // 1 2 3 4 5 6 7 8 9 10
console.log(newArray2);     // 1 2 3 4 5
////////////////////////////////////////////////////////////////////////////////
// sort
//+ Nếu có compare: trả về âm nếu a trước b
//                  dương nếu a sau b
//                  0 nếu equal
//+ Nếu không: Chuyển sang chuỗi và sắp xếp theo alphabetically (bảng chữ cái)
var arrays = [1, 12, 21, 2];
// from smallest to largest number
arrays.sort(function(a, b){
  return a-b;
}); 
console.log(arrays);    // 1 2 12 21
////////////////////////////////////////////////////////////////////////////////
// reverse
var arrayr = [1,2,3,4,5,6,7];
var newArrayr = [];

newArrayr = arrayr.reverse();
console.log(newArrayr); // 7 6 5 4 3 2 1
////////////////////////////////////////////////////////////////////////////////
// concat - noi mang
var oldArrayc = [1,2,3];
var newArrayc = [];

var concatMe = [4,5,6];

// Only change code below this line.

newArrayc = oldArrayc.concat(concatMe);
console.log(newArrayc); // 1 2 3 4 5 6
////////////////////////////////////////////////////////////////////////////////
// split chia string thanh cac mang
var string = "Split me into an array";
var arraysp = [];

arraysp = string.split(' ');
console.log(arraysp);   // [ 'Split', 'me', 'into', 'an', 'array' ]
arraysp = string.split(" ", 3);
console.log(arraysp);   // [ 'Split', 'me', 'into']
////////////////////////////////////////////////////////////////////////////////
// join nguoc voi split
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

joinedString = joinMe.join(" ");
console.log(joinedString);  // Split me into an array