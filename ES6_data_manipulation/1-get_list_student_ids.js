function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  
  return studentsList.map((student) => student.id);
}

export default getListStudentIds;
