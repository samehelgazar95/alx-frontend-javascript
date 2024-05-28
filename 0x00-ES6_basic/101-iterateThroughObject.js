export default function iterateThroughObject(reportWithIterator) {
  for (const [index, item] of reportWithIterator) {
    if (index === 0) console.log(item);

    console.log('|', item);
  }
}
