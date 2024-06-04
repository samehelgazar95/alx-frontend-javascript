function updateStudentGradeByCity(students, city, newGrades) {
  const combined = students
    .filter((ele) => ele.location === city)
    .map((ele) => {
      for (const grade of newGrades) {
        if (ele.id === grade.studentId) return { ...ele, grade: grade.grade };

        return { ...ele, grade: 'N/A' };
      }
    });
  return combined;
}

export default updateStudentGradeByCity;
