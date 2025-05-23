const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

// Get the database path from command line arguments
const databasePath = process.argv[2];

/**
 * Counts students from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @return {Promise<string>} A promise that resolves with the formatted string.
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

      let result = `Number of students: ${students.length}\n`;

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

      // Build the result string with number of students and list of firstnames in each field
      Object.keys(studentsByField).forEach((field) => {
        const studentList = studentsByField[field];
        result += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      });

      resolve(result.trim());
    });
  });
}

// Route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', async (req, res) => {
  let responseText = 'This is the list of our students\n';
  
  try {
    if (!databasePath) {
      responseText += 'Cannot load the database';
      res.send(responseText);
      return;
    }
    
    const studentsInfo = await countStudents(databasePath);
    responseText += studentsInfo;
    res.send(responseText);
  } catch (error) {
    responseText += error.message;
    res.send(responseText);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
