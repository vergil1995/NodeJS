
function Person(){
    this.message = "Hello 3";
    this.sayHello3 = function(){
        console.log(this.message);
    }
}

module.exports = new Person();