// 
// exec_test.js (test cases)
// 
// ron, Sat Jan  2 01:22:28 EST 2016
// 


var expr      = require('./expr');
var exec_unit = require('./exec');


console.log(
    exec_unit()
        .if(expr.true)
            .run(() => console.log('hello'))
        .return(() => 'world')
);


//:)~
