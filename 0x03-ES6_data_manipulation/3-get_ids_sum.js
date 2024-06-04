function getStudentIdsSum(students) {
  const idsCounter = students.reduce((acc, ele) => acc + ele.id, 0);
  return idsCounter;
}

export default getStudentIdsSum;
