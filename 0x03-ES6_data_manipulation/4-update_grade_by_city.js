export default function updateStudentGradeByCity(studentList, location, newGrades) {
  return studentList
    .filter((student) => student.location === location)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
