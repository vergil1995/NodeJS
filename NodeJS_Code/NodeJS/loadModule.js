var load = require("./module.js");
// chay ham sayHello trong module.js ben kia
load();

// nhieu module
var greet = require("./greet");

greet.english();
greet.vietnamese();