function cleanSet(set, str) {
  const res = [];

  if (typeof str !== 'string' || str === '') return '';

  for (const val of set) {
    if (typeof val === 'string' && val.toLowerCase().startsWith(str.toLowerCase()) {
      res.push(val.slice(str.length));
    }
  }

  return res.join('-');
}

export default cleanSet;
