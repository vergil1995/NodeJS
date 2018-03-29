var hello1 = require("./hello1");
hello1();

var hello2 = require("./hello2").sayHello2;
hello2();

var hello3 = require("./hello3");
hello3.sayHello3();
// require ko trả đối tượng mới
hello3.message = "Changed";
var hello31 = require("./hello3");
hello31.sayHello3();
// tạo new đối tượng
var Hello4 = require("./hello4");
hello4 = new Hello4();
hello4.sayHello4();
// truy cập biến message bên ngoài module, cấu trúc và bảo vệ module
var hello5 = require("./hello5").sayHello;
hello5();


