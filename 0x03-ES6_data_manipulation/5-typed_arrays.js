function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedInt8 = new Int8Array(buffer);

  if (position > typedInt8.length) throw new Error('Position outside range');
  else typedInt8[position] = value;

  const view = new DataView(buffer);
  return view;
}

export default createInt8TypedArray;
