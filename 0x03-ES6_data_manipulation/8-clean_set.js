function cleanSet(set, str) {
  const res = [];

  for (const val of set) {
    if (str && val.startsWith(str)) {
      res.push(val.slice(str.length));
    }
  }

  return res.join('-');
}

export default cleanSet;
