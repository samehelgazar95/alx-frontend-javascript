function createInt8TypedArray(length, position, value) {
  if (position > length) throw new Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const typed = new Int8Array(buffer);
  typed[position] = value;

  return buffer;
}

export default createInt8TypedArray;
