var firstName = "Nguyen";

console.log(firstName);
(function(name){
    var firstName = "Hai";
    console.log(firstName);
    console.log(name);
}("Anh"));

// Nguyen
// Hai
// Anh