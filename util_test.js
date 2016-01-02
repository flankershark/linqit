// ron, Sat Jan  2 13:39:21 EST 2016


var util = require('./util')();


var int_array = [ 1, 3, 5, 7, 9 ];

var str_array = [ 'hello', 'world' ];

var obj_array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob'   },
    { id: 3, name: 'Chris' }
];


console.log(util.count('hello'));    //  5 : string
console.log(util.count());           //  0 : undefined
console.log(util.count(null));       // -1 : object
console.log(util.count(1));          // -1 : number
console.log(util.count(int_array));  //  5 : object array (integer)
console.log(util.count(str_array));  //  2 : object array (string)
console.log(util.count(obj_array));  //  3 : object array (JSON)


//:)~
