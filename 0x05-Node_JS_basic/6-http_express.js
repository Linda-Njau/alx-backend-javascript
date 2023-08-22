const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});
const port = 1245;
app.listen(port, () => {
    console.log(`Server listening http://127.0.0.1:${port}`);
});

module.exports = app;
