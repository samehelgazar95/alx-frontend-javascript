export default function appendToEachArrayValue(array, appendString) {
  for (const [index, item] of array.entries()) {
    const value = item;
    array[index] = appendString + value; // eslint-disable-line
  }

  return array;
}
