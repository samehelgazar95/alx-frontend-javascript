function updateStudentGradeByCity(students, city, newGrades) {
  const combined = students
    .filter((ele) => ele.location === city)
    .map((ele) => {
      let grade = 'N/A';

      for (const g of newGrades) {
        if (ele.id === g.studentId) grade = g.grade;
      }

      return { ...ele, grade };
    });
  return combined;
}

export default updateStudentGradeByCity;
