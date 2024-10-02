export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employees = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employees.push(...allEmployees[department]);
    }
  }

  return employees[Symbol.iterator]();
}
