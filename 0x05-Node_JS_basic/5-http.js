const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    students(process.argv[2]).then((data) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}\n`);
      res.end();
    }).catch(() => {
      res.statusCode = 500;
      res.write('This is the list of our students\n');
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => { //eslint-disable-line
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
