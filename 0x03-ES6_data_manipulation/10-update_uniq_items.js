function updateUniqueItems(map) {
  if (map instanceof Map === false) throw new Error(' Cannot process');

  map.forEach((val, key) => {
    if (val === 1) {
      map.delete(key);
      map.set(key, 100);
    }
  });
}

export default updateUniqueItems;
