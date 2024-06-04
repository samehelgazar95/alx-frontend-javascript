function cleanSet(set, str) {
  const res = [];

  if (str) {
    for (const val of set) {
      if (val.toLowerCase().startsWith(str.toLowerCase())) {
        res.push(val.slice(str.length));
      }
    }
    return res.join('-');
  }

  return res.join('');
}

export default cleanSet;
