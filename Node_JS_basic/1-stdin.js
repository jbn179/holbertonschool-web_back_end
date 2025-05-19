/**
 * Interactive program that takes user's name as input and displays it
 * Handles both direct user input and piped input
 */

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle incoming data from stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  // Process the input if it exists
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Handle the end of input stream (happens when input is piped)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
