# ES6 Data Manipulation 📊

This project explores the powerful data manipulation capabilities introduced in ECMAScript 2015 (ES6) and beyond. It focuses on working with arrays, typed arrays, and various data structures like Sets and Maps in modern JavaScript.

## Project Overview 📋

The project consists of a series of exercises demonstrating various data manipulation techniques:

### Array Methods & Operations ✨
- **0-get_list_students.js**: Creating and returning arrays of objects
- **1-get_list_student_ids.js**: Using map to extract specific data
- **2-get_students_by_loc.js**: Filtering arrays based on criteria
- **3-get_ids_sum.js**: Using reduce to calculate values from arrays
- **4-update_grade_by_city.js**: Combined filtering and mapping operations

### Advanced Data Structures 🧩
- **5-typed_arrays.js**: Working with typed arrays and array buffers
- **6-set.js**: Creating and using Set objects
- **7-has_array_values.js**: Set operations and comparisons with arrays
- **8-clean_set.js**: String manipulation with Set data structures

### Maps & Dictionary-like Objects 🗺️
- **9-groceries_list.js**: Creating and populating Map objects
- **10-update_uniq_items.js**: Updating values in a Map with specific conditions

## Technologies Used 💻
- JavaScript (ES6+)
- Node.js
- Babel (for transpiling ES6+ code)
- ESLint (for code quality)

## Learning Objectives 🎯
- Use map, filter, and reduce on arrays
- Work with Typed arrays for efficient memory usage
- Learn Set, Map, and WeakMap data structures
- Implement complex data transformations
- Chain array methods for advanced data manipulation
- Apply functional programming concepts to data operations

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