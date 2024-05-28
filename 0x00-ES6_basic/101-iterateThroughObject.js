export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const [index, item] of reportWithIterator.entries()) {
    if (index === 0) {
      employees.push(item);
      continue;
    }

    employees.push(' | ');
    employees.push(item);
  }

  console.log(employees.join(''));
}
