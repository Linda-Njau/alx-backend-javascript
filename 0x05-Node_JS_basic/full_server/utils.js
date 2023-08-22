import fs from 'fs';

export function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                reject(`Cannot load the database: ${error.message}`);
            } else {
              const lines = data.split('\n');
              const studentsByField = {};
              lines.forEach((line) => {
                const fields = line.split(',').map((field) => fields.trim());
                if (fields.length === 4 && fields[0].toLowerCase() !== 'firstname') {
                    const [firstName, , , field] = fields;
                    if(!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    studentsByField[field].push(firstName);
                }
              });
              resolve(studentsByField);
            }
            });
        });
    }
    module.exports = { readDatabase };
