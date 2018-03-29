/* 
/ bắt đầu regular expression.
the is the pattern we want to match.
/ kết thúc regular expression.

g means global, trả về tất cả các kq khớp trong chuỗi chứ ko phải từ đầu tiên
i means that we want to ignore the case (uppercase or lowercase) khi searching
The whitespace characters are " " (space), \r (the carriage return), 
                              \n (newline), \t (tab), and \f (the form feed).
*/
// Setup
function RegularExpression(){
var testString = "1 Ada Lovelace and Charles 2 Babbage designed the first 3 computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;   // đếm = 1

var expression = /and/gi;  // tìm toàn bộ từ and
var andCount = testString.match(expression).length;     // đếm = 2

expression = /\d+/g;  // tìm toàn bộ số từ 0-9
var digitCount = testString.match(expression).length;   // đếm = 3

expression = /\s+/g;    // tìm khoảng trắng
var spaceCount = testString.match(expression).length;   // đếm = 20

expression = /\S/g;     // tìm toàn bộ từ ngoại trừ khoảng trắng
var nonSpaceCount = testString.match(expression).length;    // đếm = 90
}

RegularExpression();

