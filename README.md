# linqit
A couple of **LINQ-like functions**.
Truth to be told, it's far away to be a real project and deal with more complicated requirements in the real world.
It's just for fun coz I was playing around with JavaScript and Node.js =]


## Runtime Environment
node.js  
tested on v5.3.0


## Samples
Let's say we have a piece of data, it can be either
* object array like JSON object or
* primitve array like numbers

One of the most popular scenarios is to manipulate data by using ways to deal with different business rules, requirements or whatever you name it.
However, these can be divided into may be three categories:
* fitering
* sorting and
* joining data

Or I forgot something else, but hope I didn't. Anyway, let's get started.

Let's make some sample data first (Again, primitive array works as well)
```javascript
var users = [
    {
        id: 1,
        first_name: 'Emily',
        last_name: 'Perri',
        avatar: 'perrie.png'
        // and some fields you like
    }
    
    // ..., and, thousands of records here, aren't there?
    // Your imagination is necessary for that :)
];
```

You might be familar with LINQ and SQL. Assuming that you know SQL at least.
So the following ``linqit code`` are equivalent to the SQL statement followed by
```javascript
console.log(
    linqit()
        .from(users)
        .where(user => user.last_name === 'Perri')
        .orderby((a, b) => (a.id - b.id))
        .select(
            { id: user.id, first_name: user.first_name, avatar: user.avatar }
        )
);
```

```sql
SELECT id, first_name, avatar
    FROM users
    WHERE last_name = 'Perri'
    ORDER BY id ASC
    ;
```


Of course, each single part can work as a standalone function as well. So it can also be like this:

```javascript
console.log(
    linqit()
        .from(users)
        .where(user => user.last_name === 'Perri')
        .orderby((a, b) => (a.id - b.id))
);
```
or
```javascript
console.log(
    linqit()
        .from(users)
        .where(user => user.last_name === 'Perri')
);
```
even
```javascript
console.log(
    linqit()
        .from(users)
);
```


With operator ``.select()``, columns in result set can be reordered even renamed

```javascript
console.log(
    linqit()
        .from(users)
        .where(user => util.count(user.last_name) > 6)
        .orderby((a, b) => (a.id - b.id))
        .select(
            user => (
                {   // reorder, rename your data ('work_email', a new alias given here, like SQL keyword AS)
                    work_email: user.email,
                    last_name: user.last_name,
                    first_name: user.first_name,
                    avatar: user.avatar,
                    id: user.id
                }
            )
        )
);
```


## TODO
A few more features might be put on the list

1. to ``join`` something ``on`` something else
2. to ``group by`` and handle ``having`` part
3. to constrain the number of records, by using a series of functions: ``limit(cursor, offset)``, ``limit(n)``, ``all()``
4. a few of SQL-related functions, such as ``count()`` [done], ``max()``, ``min()``, ``sum()``, ``avg()``

Operators ``.join()``, ``.on()``, and ``.as()`` might be like this
```javascript
linqit()
    .from(users).as(a)
    .join(following).as(b).on((a, b) => (a.id === b.id))
    .join(activities).as(c).on((a, c) => (a.id === c.id))
```


For sure that everything can be on put the same line as expected
```javascript
linqit().from(users).where(user => user.id < 5).orderby((a, b) => (a.id - b.id)).select(user => ({ id: user.id, first_name: user.first_name }));
```


## And
Hope it's gonna be a real project soon :)

```javascript
console.log('Happy New Years & Have fun :)');

//:)~
```


## References

1. Microsoft LINQ  
   [https://msdn.microsoft.com/en-us/library/bb397926.aspx](https://msdn.microsoft.com/en-us/library/bb397926.aspx)
2. [TODO]

