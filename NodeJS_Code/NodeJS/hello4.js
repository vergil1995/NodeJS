
function Person(){
    this.message = "Hello 4";
    this.sayHello4 = function(){
        console.log(this.message);
    }
}

module.exports = Person;