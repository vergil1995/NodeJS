
var HelloModule = function(){
    console.log("Day la Module");
}

function sayHello(){
    console.log("Hello !!!");  
}

//sayHello();
// cho module khac có thể gọi được, chi gọi duoc sayHello
module.exports = HelloModule;
module.exports = sayHello;