// frequenciy counter

const same = (arr1, arr2) => {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  arr1.forEach(val => {
    frequencyCounter1[val] = frequencyCounter1[val] ? frequencyCounter1[val]++ : 1;
  });
  arr2.forEach(val => {
    frequencyCounter2[val] = frequencyCounter2[val] ? frequencyCounter2[val]++ : 1;
  });
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3], [1, 4, 8]));
