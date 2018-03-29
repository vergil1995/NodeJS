// c1: 
//var sayHello = function(){
//    console.log("Hello !!!");
//}

//module.exports = sayHello;
// c2: 
var greetings = require("./greetings.json");
var sayHello = function(){
    console.log(greetings.en);
}

module.exports = sayHello;