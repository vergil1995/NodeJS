const EventEmitter = require('events');
// Emit = thuc hien
class Customer extends EventEmitter {
    // override contructor
    constructor(name, gender) {
        //super = khoi tao tu lop cha
        super();
        this.name = name;
        this.gender = gender;
    }
};
// khoi tao obj moi
const mrJohn = new Customer("John", "male");
const msMary = new Customer("Mary", "female");
const callbackFunction = (foods, customer) => {
    // duyet index trong tung foods
    for (let index in foods) {
        console.log(`${customer.name} call ${foods[index]}`);
    }
};
// .on dki eventCallFood khi su kien xay ra thi goi ham call back
mrJohn.on('eventCallFoods', callbackFunction);
msMary.on('eventCallFoods', callbackFunction);
console.log("Do something...");
console.log("Do task 1");
// . emit thi listener cua eventCallFoods duoc goi
mrJohn.emit("eventCallFoods", ["Pizza", "Salad"], mrJohn);
console.log("Do task 2");
console.log("Do something else...");
msMary.emit('eventCallFoods', ["Coke", "Sushi"], msMary);