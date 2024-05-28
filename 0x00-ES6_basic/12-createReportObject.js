export default function createReportObject(employeesList) {
  const departments = {};

  for (const [k, v] of Object.entries(employeesList)) {
    departments[k] = v;
  }
  return {
    allEmployees: departments,
    getNumberOfDepartments(listOfEmployees) {
      return Object.keys(listOfEmployees).length;
    },
  };
}
