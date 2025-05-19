const fs = require('fs');

/**
 * Counts students from a CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
