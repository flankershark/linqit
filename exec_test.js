// 
// exec_test.js (test cases)
// 
// ron, Sat Jan  2 01:22:28 EST 2016
// 


var exec = require('./exec');


console.log(exec().if(() => true).run(() => console.log('hello')).return(() => 'world'));


//:)~
