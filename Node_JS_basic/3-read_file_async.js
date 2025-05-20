const fs = require('fs');

/**
 * Counts students from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @return {Promise<void>} A promise that resolves when counting is done.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      // Split the data into lines and remove empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Skip the header and filter out empty lines
      const students = lines.slice(1);

      // Log the total number of students
      console.log(`Number of students: ${students.length}`);

      // Group students by field
      const studentsByField = {};

      students.forEach((student) => {
        const fields = student.split(',');
        const field = fields[3];
        const firstName = fields[0];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      });

      // Log the number of students and the list of firstnames in each field
      Object.keys(studentsByField).forEach((field) => {
        const studentList = studentsByField[field];
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
