function getStudentsByLocation(students, city) {
  const filteredStudent = students.filter((e) => e.location === city);
  return filteredStudent;
}

export default getStudentsByLocation;
