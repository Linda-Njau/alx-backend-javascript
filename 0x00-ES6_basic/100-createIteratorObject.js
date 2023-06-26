export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const employees of Object.values(report.allEmployees)) {
    for (const employee of employees) {
      allEmployees.push(employee);
    }
  }
  return allEmployees;
}
