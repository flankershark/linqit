// 
// exec.js
// execution unit helper
// 
// ron, Fri Jan  1 19:30:13 EST 2016
// 


var exec = function (/* expr, expr_param */) {
    // var _expr = expr;
    // var _expr_param = expr_param;
    var _state = true;

    return {
        if: function (fn) {
            _state = fn ? fn() : false;
            console.log(_state);
            return this;
        },
        run: function (fn) {
            if (_state)
                fn();
            return this;
        },
        return: function(fn) {
            return fn();
        }
    };
};


module.exports = exec;


//:)~
