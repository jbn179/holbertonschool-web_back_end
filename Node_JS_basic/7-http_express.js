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
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim());
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const columns = lines[0].split(',');
      const fieldIndex = columns.indexOf('field');
      const firstnameIndex = columns.indexOf('firstname');

      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const values = student.split(',');
        const field = values[fieldIndex];
        const firstname = values[firstnameIndex];

        fields[field] = fields[field] || [];
        fields[field].push(firstname);
      });

      let report = `Number of students: ${students.length}`;
      Object.keys(fields).forEach((field) => {
        report += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });

      resolve(report);
    });
  });
}

// Route for the root path
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', async (req, res) => {
  res.type('text/plain');
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
  // Don't log anything to avoid interfering with tests
});

module.exports = app;
