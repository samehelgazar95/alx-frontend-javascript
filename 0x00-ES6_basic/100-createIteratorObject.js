export default function createIteratorObject(report) {
  let allEmployees = [];
  for (let item of Object.values(report.allEmployees)) {
    allEmployees.push(...item);
  }
  return allEmployees;
}
