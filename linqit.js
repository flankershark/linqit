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


var exec = require('./exec');


var linqit = function () {
    return {
        data: null,
        
        from: function (data) {
            return exec().run(() => this.data = data).return(() => this);
        },
        where: function(fn) {
            return exec().run(() => this.data = this.data.filter(fn)).return(() => this);
        },
        orderby: function(fn) {
            return exec().run(() => this.data = this.data.sort(fn)).return(() => this);
        },
        select: function(fn) {
            return exec().run(() => this.data = this.data.map(fn)).return(() => this);
        }
    };
};


module.exports = linqit;


//:)~
