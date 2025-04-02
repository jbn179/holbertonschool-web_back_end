function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((student) => student.location === city);
}

export default getStudentsByLocation;
