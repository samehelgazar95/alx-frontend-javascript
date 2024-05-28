export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const [index, item] of reportWithIterator.entries()) {
    if (index === 0) {
      employees.push(item);
      continue; // eslint-disable-line
    }

    employees.push(' | ');
    employees.push(item);
  }

  return employees.join('');
}
