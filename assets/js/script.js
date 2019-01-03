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
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === num) return true;
    else if (avg > num) right--;
    else left++;
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

// maxSubarraySum

const maxSubarraySum = (arr, num) => {
  // short circuit if arr length is less than num
  if (arr.length < num) return null;
  // create max as -infinity
  let max = -Infinity;
  // create a window variable
  let window = 0;
  // create initial window
  for (let i = 0; i < num; i++) {
    window += arr[i];
  }
  max = window > max ? window : max;
  // loop through array and replace max with window if window is larger
  for (let i = 0; i < arr.length - num; i++) {
    window -= arr[i];
    window += arr[i + num];
    max = window > max ? window : max;
  }
  return max;
  // return max
};

console.log('maxSubarraySum');
console.log(maxSubarraySum([1, 2, 3, 4], 2)); // 7
console.log(maxSubarraySum([1, 2, 3, 4], 3)); // 9

// minSubArrayLen

const minSubArrayLen = (arr, num) => {
  // create left pointer at 0
  let left = 0;
  // create right pointer at 0
  let right = 0;
  // create number to hold current sum
  let currentSum = 0;
  // create number to hold the minimum length
  let minLength = Infinity;
  // loop through whole
  while (left < arr.length) {
    // if sum is less than num
    if (currentSum < num) {
      // increase right pointer if there is room
      if (right < arr.length) {
        currentSum += arr[right];
        right++;
      } else {
        // otherwise break
        break;
      }
    } else {
      // swap min length if it fits
      if (right - left < minLength) {
        minLength = right - left;
      }
      // subtract leftmost variable before incrementing
      currentSum -= arr[left];
      left++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  } else {
    return minLength;
  }
};

console.log('minSubArrayLen');
console.log(minSubArrayLen([1, 2, 3, 4, 5], 9)); // 2
console.log(minSubArrayLen([1, 2, 3], 5)); // 2

// findLongestSubstring

const findLongestSubstring = str => {
  // holds the max length of substring
  let max = 0;
  // holds the latest appearence of each character
  let lookup = {};
  // holds the index of the start of the substring
  let start = 0;
  // loop through string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if the character is in the lookup object...
    if (lookup[char]) {
      // if start is less than the character value, increase start to that value;
      if (start < lookup[char]) {
        start = lookup[char];
      }
      // change the character value to current index
      lookup[char] = i;
    } else {
      lookup[char] = i;
      if (i - start > max) {
        max = i - start;
      }
    }
    // each time we encounter a new character, we store its index in the lookup object
  }
  return max;
};

console.log('findLongestSubstring');
console.log(findLongestSubstring('hello'));
console.log(findLongestSubstring('thecatinthehat'));

// factorial

const factorial = num => {
  if (num === 1) return num;
  return num * factorial(num - 1);
};

console.log('factorial');
console.log(factorial(4));
console.log(factorial(1));
