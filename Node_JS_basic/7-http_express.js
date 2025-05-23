// Import required modules
const express = require('express');
const fs = require('fs');

/**
 * Counts students from a CSV file asynchronously
 * @param {string} path - The path to the CSV file containing student data
 * @returns {Promise<string>} A promise that resolves to a formatted report string
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the CSV file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // Reject with standard error message if file cannot be read
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split data into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim());
      
      // Check if file has valid content (at least header + 1 data line)
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Parse header to get column indices dynamically
      const columns = lines[0].split(',');
      const fieldIndex = columns.indexOf('field');
      const firstnameIndex = columns.indexOf('firstname');

      // Get student data (skip header row)
      const students = lines.slice(1);
      const fields = {};

      // Group students by their field of study
      students.forEach((student) => {
        const values = student.split(',');
        const field = values[fieldIndex];
        const firstname = values[firstnameIndex];

        // Initialize field array if it doesn't exist
        fields[field] = fields[field] || [];
        fields[field].push(firstname);
      });

      // Build the formatted report string
      let report = `Number of students: ${students.length}`;
      Object.keys(fields).forEach((field) => {
        report += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });

      // Resolve with the completed report
      resolve(report);
    });
  });
}

// Create Express application instance
const app = express();
const port = 1245;

// Define route for homepage
app.get('/', (req, res) => {
  // Set response content type to plain text
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Define route for students listing
app.get('/students', async (req, res) => {
  // Set response content type to plain text
  res.set('Content-Type', 'text/plain');
  
  // Get database filename from command line arguments
  const databaseFilename = process.argv[2];

  try {
    // Attempt to count students from the database file
    const report = await countStudents(databaseFilename);
    res.send(`This is the list of our students\n${report}`);
  } catch (error) {
    // Handle errors (file not found, invalid format, etc.)
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Start the Express server on the specified port
app.listen(port);

// Export the app for external use (testing, etc.)
module.exports = app;
