var util = require("util");

var name = "Altair";
var message = util.format("Hello, %s", name);   

console.log(message);   // Hello, Altair
util.log(message);      // 7 Feb 21:24:45 - Hello, Altair

var url = require("url");

var urlInfo = url.parse("http://fategrandorder.wikia.com/wiki/Semiramis")
console.log(urlInfo);