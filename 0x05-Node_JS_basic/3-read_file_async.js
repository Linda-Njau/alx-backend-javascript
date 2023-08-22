const fs = require('fs').promises;

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8')
        .then((data) => {
            const students = data.split('\n')
            .map((student) => student.split(',').map((field) => field.trim()))
            .filter((student) => student.length === 4 && student[0] !== 'firstname')
            .map((student) => ({
                firstName: student[0],
                lastName: student[1],
                age: student[2],
                field: student[3],
            }));
            const csStudents = students
                .filter((student) => student.field === 'CS')
                .map((student) => student.firstName);

            const sweStudents = students
               .filter((student) => student.field === 'SWE')
               .map((student) => student.firstName );

            console.log(`Number of students: ${students.length}`);
            console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
            console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
       
            resolve({
                students,
                csStudents,
                sweStudents,
            });
        })
        .catch((error) => {
            reject(`Error: Cannot load the database ${error.message}`);
        });
    });
}

module.exports = countStudents;
