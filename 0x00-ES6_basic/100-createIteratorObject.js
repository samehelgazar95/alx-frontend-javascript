export default function createIteratorObject(report) {
  const allEmployees = [];
  for (let item of Object.values(report.allEmployees)) {
    allEmployees.push(...item);
  }
  return allEmployees;
}
