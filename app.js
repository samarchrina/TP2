const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [
    { id: 1, name: 'alice', email: 'alice@example.com' },
    { id: 2, name: 'bob', email: 'bob@example.com' }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Application example listening on port ${port}`);
});
