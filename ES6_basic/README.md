# ES6 Basics 🚀

This project is an introduction to the new features and syntax improvements introduced in ECMAScript 2015 (ES6). It covers the fundamental concepts that modernized JavaScript and made it more powerful and expressive.

## Project Overview 📋

The project consists of a series of exercises that demonstrate various ES6 features:

### Variables & Constants ✨
- **0-constants.js**: Understanding `const` and `let` declarations
- **1-block-scoped.js**: Working with block-scoped variables

### Functions & Parameters 🔧
- **2-arrow.js**: Using arrow functions
- **3-default-parameter.js**: Setting default function parameters
- **4-rest-parameter.js**: Implementing rest parameters
- **5-spread-operator.js**: Using the spread operator

### Strings & Objects 📝
- **6-string-interpolation.js**: Template literals for string interpolation
- **7-getBudgetObject.js**: Object property shorthand
- **8-getBudgetCurrentYear.js**: Computed property names
- **9-getFullBudget.js**: Method properties in objects

### Iteration & Object Creation 🔄
- **10-loops.js**: For...of loops for iterables
- **11-createEmployeesObject.js**: Creating objects with specific structures
- **12-createReportObject.js**: Advanced object creation and manipulation

## Technologies Used 💻
- JavaScript (ES6)
- Node.js
- Babel (for transpiling ES6 code)
- ESLint (for code quality)

## Learning Objectives 🎯
- Understand new variable declarations with `const` and `let`
- Learn function improvements (arrow functions, default params, rest, etc.)
- Use string templating with template literals
- Implement object creation and properties enhancement
- Understand iterability and ES6 iterators
- Apply proper coding practices with modern JavaScript

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
