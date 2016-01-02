// 
// linqit_test_join.js
// 
// A few of LINQ-like functions, but it's just for fun.
// 
// Coz I was learning Node.js,
// and I really had to code something,
// couldn't stay myself focused on the books all the time.
// 
// [= coding for fun =]
// 
// ron, Sat Jan  2 15:57:47 EST 2016
// 


var util   = require('./util')();
var linqit = require('./linqit');


var users = [
    { id: 5, email: 'eric@foobar.org',   first_name: 'Emily',  last_name: 'Church',  avatar: null           },
    { id: 2, email: 'bob@foobar.org',    first_name: 'Bob',    last_name: 'Marley',  avatar: 'marleyb.png'  },
    { id: 1, email: 'alice@foobar.org',  first_name: 'Alice',  last_name: 'Lavigne', avatar: 'lavignea.png' },
    { id: 4, email: 'dave@foobar.org',   first_name: 'David',  last_name: 'Back',    avatar: null           },
    { id: 3, email: 'chris@foobar.org',  first_name: 'Chris',  last_name: 'Perri',   avatar: 'perric.png'   },
    { id: 6, email: 'flavia@foobar.org', first_name: 'Flavia', last_name: 'Church',  avatar: 'churchf.png'  }
];

var following = [
    { id: 1, fid: 2 },
    { id: 1, fid: 3 },
    { id: 1, fid: 5 },

    { id: 2, fid: 1 },
    { id: 2, fid: 3 },
    { id: 2, fid: 4 },
    { id: 2, fid: 6 }
];


// 
// join one more data set on the right hand side
// 
// NOTE: these two features are currently under development
// 
// A filtered subset is returned but data on the right side hasn't been merged to the left side.
// 
console.log(
    linqit()
        .from(users)
        .join(following)
        .on((a, b) => (a.id === b.id && a.id > 1))
);


// 
// Development Notes & Logs
// 
// the implementation's supposed to be like this:
// 
// linqit().from(users).join(following).on((a, b) => a.id == b.id)
// 
// step #1 : joining data set on the right hand side (currently supports only one data set to be joined)
// linqit().from(users).join(following);
// 
// step #2 : filtering data with operator .on() [ it's currently a filter only ]
// linqit().from(users).join(following).on((a, b) => (a.id === b.id && a.id > 1));
// 
// setp #3 : [ TODO ]
// linqit().from(users).join(following).as(b).on((a, b) => (a.id === b.id)).join(activities).as(c).on((a, c) => (a.id === c.id));
// 


//:)~
