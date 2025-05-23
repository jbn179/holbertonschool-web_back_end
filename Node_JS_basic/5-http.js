const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';
const dbPath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');

    if (!dbPath) {
      res.end('Cannot load the database');
      return;
    }

    // Capture console.log output
    const originalConsoleLog = console.log;
    const output = [];
    
    console.log = (message) => {
      output.push(message);
    };

    try {
      await countStudents(dbPath);
      
      // Restore console.log
      console.log = originalConsoleLog;
      
      res.end(output.join('\n'));
    } catch (error) {
      // Restore console.log in case of error
      console.log = originalConsoleLog;
      res.end(error.message);
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
