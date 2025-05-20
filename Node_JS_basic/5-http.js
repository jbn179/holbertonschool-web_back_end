const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';
const dbPath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const url = req.url;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    
    try {
      // Create a custom implementation to capture the console.log output
      const outputCapture = [];
      const originalConsoleLog = console.log;
      console.log = (message) => {
        outputCapture.push(message);
      };

      // Call the countStudents function
      await countStudents(dbPath);

      // Restore the original console.log
      console.log = originalConsoleLog;

      // Send the captured output as response
      res.end(outputCapture.join('\n'));
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
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
