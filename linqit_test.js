// 
// linqit_test.js (test cases)
// 
// A few of LINQ-like functions, but it's just for fun.
// 
// Coz I was learning Node.js,
// and I really had to code something,
// couldn't stay myself focused on the books all the time.
// 
// [= coding for fun =]
// 
// ron, Fri Jan  1 16:08:33 EST 2016
// 


var util   = require('./util')();
var expr   = require('./expr');
var linqit = require('./linqit');


var numbers = [ 3, 7, 1, 5, 18, 77, 51, 82 ];

var users = [
    { id: 5, email: 'eric@foobar.org',   first_name: 'Emily',  last_name: 'Church',  avatar: null           },
    { id: 2, email: 'bob@foobar.org',    first_name: 'Bob',    last_name: 'Marley',  avatar: 'marleyb.png'  },
    { id: 1, email: 'alice@foobar.org',  first_name: 'Alice',  last_name: 'Lavigne', avatar: 'lavignea.png' },
    { id: 4, email: 'dave@foobar.org',   first_name: 'David',  last_name: 'Back',    avatar: null           },
    { id: 3, email: 'chris@foobar.org',  first_name: 'Chris',  last_name: 'Perri',   avatar: 'perric.png'   },
    { id: 6, email: 'flavia@foobar.org', first_name: 'Flavia', last_name: 'Church',  avatar: 'churchf.png'  }
];


// sample #0: numbers
console.log(
    linqit()
        .from(numbers)
        .where((x) => x > 50)
        .orderby((a, b) => (b - a))
);



// sample #1: WHERE field < x ORDER BY field ASC, but it's dealing with object array this time
console.log(
    linqit()
        .from(users)
        .where(user => user.id < 5)
        .orderby((a, b) => (a.id - b.id))
        .select(
            user => (
                { id: user.id, first_name: user.first_name }
            )
        )
);


// sample #2: WHERE field IS NULL
console.log(
    linqit()
        .from(users)
        .where(user => user.avatar === null)
);


// sample #3: WHERE field = 'string'
console.log(
    linqit()
        .from(users)
        .where(user => user.last_name === 'Church')
        .orderby((a, b) => (a.id - b.id))
);


// sample #4: ORDER BY field;
console.log(
    linqit()
        .from(users)
        .orderby((a, b) => (a.id - b.id))
);


// sample #5: SELECT [ particular fields / columns ], and also comes with .count() comparison in the where clause and ORDER BY field DESC
console.log(
    linqit()
        .from(users)
        .where(user => util.count(user.last_name) > 6)
        .orderby((a, b) => (a.id - b.id))
        .select(
            user => (
                {   // reorder, rename (different alias given here, like SQL keyword AS)
                    work_email: user.email,
                    last_name: user.last_name,
                    first_name: user.first_name,
                    avatar: user.avatar,
                    id: user.id
                }
            )
        )
);


// sample #6: an inline operation (put everything on the same line if you hope so)
console.log(linqit().from(users).where(user => user.id < 5).orderby((a, b) => (a.id - b.id)).select(user => ({ id: user.id, first_name: user.first_name })));


//:)~
