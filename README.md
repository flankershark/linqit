# linqit

A couple of LINQ-like functions.
It's just for fun coz I was playing around with JavaScript and Node.js

```javascript
var users = [
    { id: 1, first_name: 'Emily', last_name: 'Perri', avatar: 'perrie.png' }
];

console.log(
    linqit()
        .from(users)
        .where(user => user.last_name === 'Perri')
        .orderby((a, b) => (a.id - b.id))
        .select(
            { id: user.id, first_name: user.first_name, avatar: user_avatar }
        )
);
```

Just hope it's gonna be a real project soon :)
