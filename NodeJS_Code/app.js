function test(){
    console.log("test");
}

// first class function
function first(fn){
    fn();
}

first(test);

//function expression
var goodbye = function (){
    console.log("Bye !!!");
}

goodbye();

// 
first(function(){
    console.log("abcd");
});