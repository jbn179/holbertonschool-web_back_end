# ES6 Promises 🔄

This project explores JavaScript Promises, a powerful feature introduced in ECMAScript 2015 (ES6) that provides a cleaner way to handle asynchronous operations. The exercises demonstrate how to create, chain, and manage promises for more readable and maintainable asynchronous code.

## Project Overview 📋

The project consists of a series of exercises demonstrating various aspects of Promises:

### Promises Basics ✨
- **0-promise.js**: Creating a simple Promise
- **1-promise.js**: Resolving and rejecting Promises based on conditions
- **2-then.js**: Handling Promise resolution with then, catch, and finally

### Working with Multiple Promises 🔄
- **3-all.js**: Using Promise.all to handle multiple Promises together
- **4-user-promise.js**: Creating resolved Promises with specific values
- **5-photo-reject.js**: Working with Promise rejection
- **6-final-user.js**: Handling settled Promises regardless of state

### Advanced Promise Handling ⚡
- **7-load_balancer.js**: Implementing Promise.race for competitive responses
- **8-try.js**: Combining try/catch with Promises
- **9-try.js**: Creating guardrails for Promise-returning functions

## Technologies Used 💻
- JavaScript (ES6+)
- Node.js
- Babel (for transpiling ES6+ code)
- ESLint (for code quality)

## Learning Objectives 🎯
- Understand Promises: how, why, and what they are
- Use `then`, `resolve`, `catch` methods effectively
- Utilize every method of the Promise object
- Implement error handling with throw/try
- Use the await operator for cleaner asynchronous code
- Create and use async functions

## Requirements ⚙️
- All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- All files should end with a new line
- Code should use the `.js` extension
- Code tested with Jest and the command `npm run test`
- Code verified against lint using ESLint
- All functions must be exported

## Setup 🛠️
```bash
# Install NodeJS 12.11.x
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Check version
nodejs -v
npm -v

# Install Jest, Babel, and ESLint
npm install
```

## How to Run Tests 🧪
```bash
# Run tests for a specific file
npm run dev <filename>

# Example
npm run dev 0-main.js
```

## Author ✍️
- Benjamin Ristord