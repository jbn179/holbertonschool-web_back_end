update_grade_by_city.js
function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
