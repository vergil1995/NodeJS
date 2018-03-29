// c1: 
//var xinChao = function(){
//    console.log("Xin Chao !!!");
//}

//module.exports = xinChao;
// c2: 
var greetings = require("./greetings.json");
var xinChao = function(){
    console.log(greetings.vi);
}

module.exports = xinChao;