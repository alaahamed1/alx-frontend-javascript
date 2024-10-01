export default function createReportObject(employeesList) {
  const allEmployees = {...employeesList};
  return {
    allEmployees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    }
  }
}
