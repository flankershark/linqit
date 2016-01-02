// ron, Sat Jan  2 13:36:58 EST 2016


var util = function () {
    return {
        count: function (something) {
            var n = 0;

            // console.log(typeof (something)); // should use debug feature to handle this
            
            switch (typeof (something)) {
            case 'undefined': n = 0; break;
            case 'string':
                n = something.length;
                break;
            case 'object':
                if (something instanceof Array)
                    n = something.length;
                else
                    n = -1;
                break;
            default: n = -1; break;
            }

            return n;
        }
    };
};


module.exports = util;


//:)~
