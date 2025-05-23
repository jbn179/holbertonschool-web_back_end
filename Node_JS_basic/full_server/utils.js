import fs from 'fs';

/**
 * Reads the database file asynchronously and processes student data
 * @param {string} path - Path to the CSV file
 * @returns {Promise<Object>} - Promise resolving to an object with student data by field
 */
const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Split the data into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Skip the header and filter out empty lines
    const students = lines.slice(1);
    
    // Initialize the result object to store students by field
    const studentsByField = {};

    students.forEach((student) => {
      const fields = student.split(',');
      const firstName = fields[0];
      const field = fields[3];
      
      // Initialize the array for this field if it doesn't exist
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      
      // Add the student's first name to the appropriate field array
      studentsByField[field].push(firstName);
    });

    resolve(studentsByField);
  });
});

export default readDatabase;