# linqit
A couple of LINQ-like functions.
Truth to be told, it's far away to be a real project and deal with more complicated requirements in the real world.
It's just for fun coz I was playing around with JavaScript and Node.js


## Runtime Environment
node.js
tested on v5.3.0


## Samples
Let's say we have a piece of data, it can be either
* object array like JSON object or
* primitve array like numbers

One of popular cases is to manipulate data by using ways for different business rules, scenarios or whatever you name it.
However, these can be divided into may be three categories:
* fitering
* sorting and
joining data

May be I forgot something else, but hope I didn't. Anyway, let's get started.
Let's make some sample data first
```javascript
var users = [
    { id: 1, first_name: 'Emily', last_name: 'Perri', avatar: 'perrie.png' }
];
```

You might be familar with LINQ and SQL. Assuming that you know SQL at least.
So the following **linqit code** are equivalent to the SQL statement followed by
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
or
```javascript
console.log(
    linqit()
        .from(users)
);
```


## And
Hope it's gonna be a real project soon :)

```javascript
console.log('Happy New Years & Have fun :)');
```
