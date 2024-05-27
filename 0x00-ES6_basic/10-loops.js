export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const item of array) {
    newArr.push(appendString + item);
  }

  return newArr;
}
