const rect = require('./Shape/hcn');
console.log(`The area of the rectangle(width = 10, height = 20) is ${rect.area(10, 20)}`);
console.log(`The circumference of the rectangle(width = 10, height = 20) is ${rect.circumference(10, 20)}`);
console.log(`current time is: ${rect.currentDateTime}`);
console.log(`directory name: ${rect.directoryName}`);
// console.log(`directory name: ${rect.__dirname}`);//cannot call like this !
console.log(`file name: ${rect.fileName}`);
// let- gan dc nhung ko khoi tao duoc 2 lan
let aCircle = require('./Shape/circle');
console.log(`aCircle's area: ${aCircle.area(5)}`);