function changeByValue(b){
    b = 2;
}

var a = 1;
changeByValue(a);
console.log(a);     // a van = 1

function changeByRef(obj){
    obj.prop1 = function() {

    };
    obj.a = 100;
    obj.b = {};
}

var c = {};
c.prop1 = {};
c.a = 0;
changeByRef(c);
console.log(c);             // { prop1: [Function], a: 100, b: {} }