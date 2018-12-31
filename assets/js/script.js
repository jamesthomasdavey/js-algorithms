const areThereDuplicates = (...arr) => {
  const lookup = {};
  for (let item of arr) {
    lookup[item] = (lookup[item] || 0) + 1;
    if (lookup[item] > 1) {
      return true;
    }
  }
  return false;
}

areThereDuplicates(1, 2, 3, 3);