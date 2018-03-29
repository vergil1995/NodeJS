//"area" is a function
// Cach 1
// export ham tinh dien tich
// exports.area = (width, height) => width * height;
// //"circumference" is a function
// // export ham tinh chu vi
// exports.circumference = (width, height) => 2 * (width + height);

// Cach 2: module = tro den file nay va public cac ham sau
//  module.exports = {
//     area: (width, height) => width * height,
//     circumference: (width, height) => 2 * (width + height)
// }
// Cach 3 dung return khi phan thuc thi nhieu hon 1 dong 
module.exports = {
    //"area" is a function
    area: (width, height) => {
        return width * height;
    },
    circumference: (width, height) => {
        console.log("Calculating...");
        return 2 * (width + height);
    },
    //currentDateTime is a property, not a function
    // public thuoc tinh
    currentDateTime: Date(),
    directoryName: __dirname,
    fileName: __filename
}