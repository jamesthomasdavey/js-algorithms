// sameFrequency

const sameFrequency = (num1, num2) => {
  // short circuit if they are different lengths
  if (num1.toString().length !== num2.toString().length) return false;
  // create lookup object for frequency of each digit of first number
  const lookup = {};
  // loop through first number and apply to object
  for (let digit of num1.toString()) {
    lookup[digit] = lookup[digit] ? lookup[digit] + 1 : 1;
  }
  // loop through second number and remove from object
  for (let digit of num2.toString()) {
    if (lookup[digit]) {
      lookup[digit]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log('sameFrequency');
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(182, 282)); // false

// areThereDuplicates

const areThereDuplicates = (...arr) => {
  // create lookup object
  const lookup = {};
  // loop through array
  for (let item of arr) {
    // if the item is already in the lookup object, return true
    if (lookup[item]) {
      return true;
    } else {
      // if the item is not in the lookup object, add it
      lookup[item] = true;
    }
  }
  return false;
};

console.log('areThereDuplicates');
console.log(areThereDuplicates(1, 2, 3, 4, 4)); // true
console.log(areThereDuplicates(1, 2, 3, 4)); // false

// averagePair

const averagePair = (arr, num) => {
  // short circuit if array length is 0
  if (arr.length === 0) return false;
  // create a left pointer at 0
  let left = 0;
  // create a right pointer at array length - 1
  let right = arr.length - 1;
  // loop through array while left is less than right
  while (left < right) {
    // if the average equals the number, return true
    if ((arr[left] + arr[right]) / 2 === num) {
      return true;
    } else if ((arr[left] + arr[right]) / 2 > num) {
      right--;
    } else if ((arr[left] + arr[right]) / 2 < num) {
      left++;
    }
  }
  return false;
};

console.log('averagePair');
console.log(averagePair([1, 2, 3, 4], 3.5)); //true
console.log(averagePair([1, 2, 3, 4], 3.4)); // false

// isSubsequence

const isSubsequence = (str1, str2) => {
  // create p1 for str1 as 0
  let p1 = 0;
  // create p2 for str2 as 0
  let p2 = 0;
  // create a blank substring
  let subStr = '';
  // loop through str2
  while (p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      // if p1 equals p2, increment both and add to blank string
      subStr += str2[p2];
      p1++;
      p2++;
    } else {
      // if they do not equal, increment p2 only
      p2++;
    }
    // if substring equals p1, return true
    if (subStr === str1) return true;
  }
  // return false
  return false;
};

console.log('isSubsequence');
console.log(isSubsequence('hello', 'hell o world')); // true
console.log(isSubsequence('hella', 'hell o world')); // false
