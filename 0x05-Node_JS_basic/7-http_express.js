const express = require('express');
const students = require('./3-read_file_async');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello Holberton Schol!');
});

app.get('/students', async (req, res) => {
    try{
        const filePath = process.argv[2] || 'database.csv';
        const data = await students(filePath);

        const responseText = `This is the list of our students\n`
          +`Number of students: ${data.students.length}\n`
          +`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`
          +`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}\n`;
        
          res.type('text/plain').send(responseText);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});
app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
});
module.exports = app;
