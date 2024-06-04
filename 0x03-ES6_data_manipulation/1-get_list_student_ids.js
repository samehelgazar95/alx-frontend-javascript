function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) return [];

  return studentsArray.map((ele) => ele.id);
}

export default getListStudentIds;
