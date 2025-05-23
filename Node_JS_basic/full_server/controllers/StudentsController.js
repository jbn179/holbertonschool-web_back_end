import readDatabase from '../utils';

/**
 * Students controller class for handling student-related routes
 */
class StudentsController {
  /**
   * Handles GET request to fetch all students
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static getAllStudents(req, res) {
    // Get the database file path from command line arguments
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((studentsByField) => {
        let responseText = 'This is the list of our students\n';
        
        // Sort fields alphabetically (case insensitive)
        const sortedFields = Object.keys(studentsByField).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase()));
        
        // Build the response for each field
        sortedFields.forEach((field) => {
          const students = studentsByField[field];
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        
        // Remove the trailing newline and send the response
        res.status(200).send(responseText.trim());
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  /**
   * Handles GET request to fetch students by major
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    
    // Validate the major parameter
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Get the database file path from command line arguments
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((studentsByField) => {
        if (!studentsByField[major]) {
          res.status(500).send(`No students found for major: ${major}`);
          return;
        }
        
        const students = studentsByField[major];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentsController;