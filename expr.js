// 
// expr.js
// 
// ron, Sat Jan  2 02:13:53 EST 2016
// 


module.exports = function () {
    return {
        true:  () => true,
        false: () => false,
        null:  () => null,
        empty: () => {}
    };
};


//:)~
