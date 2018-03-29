// first-class function
function temp(fn){
    fn();
}

function hello(){
    console.log("Hello !!!");
}

function goodbye(){
    console.log("Bye Bye !!!");
}

temp(hello);
temp(goodbye);

// function expression
var helloExp = function(){
    console.log("Hello Expression !!!");
}

helloExp();

temp(function(){
    console.log("Bye Expression !!!");
});