function Person(name, password){
    this.name = name;
    this.password = password;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getPass = function(){
    return this.password;
}

Person.prototype.getLevel = function(){
    return this.level;
}

Person.prototype.level = "Admin";

var person = new Person("Abc", "1");
console.log(person);                        //Person { name: 'admin', password: '1' }

function User(name){
    this.name = name;
}

User.prototype = new Person();
// User ke thừa 3 phương thức getName, getPass, getLevel. Thuộc tính: Level.
// Không kế thừa những cái ở trong Person: name, password
var user = new User("Altair");
console.log(user);                          // Person { name: 'Altair' }
console.log(user.getLevel());               // Admin
console.log(person.getName());              // Abc

// Mở rộng Date định dạng ngày VN
Date.prototype.vnFormat = function(){
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;     // phai + 1
    var dd = this.getDate();

    return dd + "/" + mm + "/" + yyyy;
}

var now = new Date();
var xms = new Date(2018, 11, 25);
console.log(now.vnFormat());
console.log(xms.vnFormat());