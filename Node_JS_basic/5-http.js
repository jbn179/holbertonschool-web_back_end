const http = require('http');
const fs = require('fs');

const port = 1245;
const host = 'localhost';
const dbPath = process.argv[2];

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    let responseText = 'This is the list of our students\n';
    
    try {
      if (!dbPath) {
        responseText += 'Cannot load the database';
        res.end(responseText);
        return;
      }
      
      const studentsInfo = await countStudents(dbPath);
      responseText += studentsInfo;
      res.end(responseText);
    } catch (error) {
      responseText += error.message;
      res.end(responseText);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
