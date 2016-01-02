// 
// linqit.js
// 
// A few of LINQ-like functions, but it's just for fun.
// 
// Coz I was learning Node.js,
// and I really had to code something,
// couldn't stay myself focused on the books all the time.
// 
// [= coding for fun =]
// ron, Fri Jan  1 16:08:13 EST 2016
// 


var exec_unit = require('./exec');


var linqit = function () {
    var _join = [
    ];
    
    return {
        data: null,
        
        from: function (data) {
            return exec_unit().run(() => this.data = data).return(() => this);
        },
        
        where: function(fn) {
            return exec_unit().run(() => this.data = this.data.filter(fn)).return(() => this);
        },
        
        orderby: function(fn) {
            return exec_unit().run(() => this.data = this.data.sort(fn)).return(() => this);
        },
        
        select: function(fn) {
            return exec_unit().run(() => this.data = this.data.map(fn)).return(() => this);
        },
        
        join: function(data, alias) {
            // it might support multiple joins in the future releases
            // _join[alias] = data;
            
            // currently it oly supports to join one data set on the right hand side
            return exec_unit().run(() => _join = data).return(() => this);
        },
        
        on: function (fn) {
            return exec_unit().run(() => this.data = this.data.filter((a) => _join.some((b) => fn.call(this, a, b)))).return(() => this);
        }
    };
};


module.exports = linqit;


//:)~
