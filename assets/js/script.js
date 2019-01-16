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
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log('factorial');
console.log(factorial(4));
console.log(factorial(0));

// collectOdds

const collectOdds = arr => {
  let odds = [];
  if (arr.length === 0) return odds;
  if (arr[0] % 2 !== 0) odds.push(arr[0]);
  odds = [...odds, ...collectOdds(arr.slice(1))];
  return odds;
};

console.log('collectOdds');
console.log(collectOdds([1, 2, 3, 4, 5, 6, 7]));
console.log(collectOdds([-1, -2, -3, -4, -5, -6, -7]));

// power

const power = (num1, num2) => {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
};

console.log('power');
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

// productOfArray

const productOfArray = arr => {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};

console.log('productOfArray');
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// recursiveRange

const recursiveRange = num => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

console.log('recursiveRange');
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

// fib

const fib = num => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log('fib');
console.log(fib(4)); // 3
console.log(fib(10)); // 55

// reverse

const reverse = str => {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
};

console.log('reverse');
console.log(reverse('hello')); // olleh
console.log(reverse('whatever')); // revetahw

// isPalindrome

const isPalindrome = str => {
  if (str.length === 1 || str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
};

console.log('isPalindrome');
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('whatever')); // false

// someRecursive

const someRecursive = (arr, callback) => {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
};

const isOdd = num => num % 2 !== 0;

console.log('someRecursive');
console.log(someRecursive([1, 2, 3, 4, 5], isOdd)); // [1,3,5]
console.log(someRecursive([2, 4, 6], isOdd)); // [3,5]

// flatten

const flatten = matrix => {
  let result = [];
  matrix.forEach(arr => {
    if (Array.isArray(arr)) {
      result.push(...flatten(arr));
    } else {
      result.push(arr);
    }
  });
  return result;
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// capitalizeFirst

const capitalizeFirst = arr => {
  const result = [];
  if (arr.length === 0) return result;
  result.push(arr[0][0].toUpperCase() + arr[0].substring(1));
  result.push(...capitalizeFirst(arr.slice(1)));
  return result;
};
console.log('capitalizeFirst');
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// nestedEvenSum

const nestedEvenSum = obj => {
  let result = 0;
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'object') {
      result += nestedEvenSum(obj[k]);
    } else if (typeof obj[k] === 'number' && obj[k] % 2 === 0) {
      result += obj[k];
    }
  });
  return result;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.log('nestedEvenSum'); // 6
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

// stringifyNumbers

const stringifyNumbers = obj => {
  const newObj = {};
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'number') {
      newObj[k] = obj[k].toString();
    } else if (typeof obj[k] === 'object') {
      if (Array.isArray(obj[k])) {
        newObj[k] = obj[k].map(val => stringifyNumbers(val));
      } else {
        newObj[k] = stringifyNumbers(obj[k]);
      }
    } else {
      newObj[k] = obj[k];
    }
  });
  return newObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log('stringifyNumbers');
console.log(stringifyNumbers(obj));

// linearSearch

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

console.log('linearSearch');
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([100], 100)); // 0

// binarySearch

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) return middle;
    else if (arr[middle] < val) left = middle + 1;
    else right = middle;
  }
  return -1;
};

console.log('binarySearch');
console.log(
  binarySearch([1, 3, 15, 22, 24, 33, 62, 45, 50, 51, 52, 74, 88, 92, 105, 167, 322], 16)
);
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// naiveStringSearch

const naiveStringSearch = (str1, str2) => {
  let counter = 0;
  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) break;
      if (j === str2.length - 1) counter++;
    }
  }
  return counter;
};

console.log('naiveStringSearch');
console.log(naiveStringSearch('hellomyoldfriendoldboy', 'old')); // 2
console.log(naiveStringSearch('whatisthiswhatamiwhatareyoudoing', 'what')); // 3

// bubbleSort

const bubbleSort = arr => {
  let noSwaps;
  for (let i = 0; i < arr.length - 1; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log('bubbleSort');
console.log(bubbleSort([5, 2, 4, 3, 8, 6, 7, 1]));
console.log(bubbleSort([55, 21, 42, 93, 6, 18, 22, 14]));

// selectionSort

const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

console.log('selectionSort');
console.log(selectionSort([19, 44, 38, 5, 47, 15]));
console.log(selectionSort([5, 4, 3, 2, 1, 0]));

// insertionSort

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log('insertionSort');
console.log(insertionSort([1, 2, 3, 0]));
console.log(insertionSort([1, 5, 42, 3]));

// mergeSort

const merge = (arr1, arr2) => {
  let result = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
    } else {
      result.push(arr2[i2]);
      i2++;
    }
  }
  while (i1 < arr1.length) {
    result.push(arr1[i1]);
    i1++;
  }
  while (i2 < arr2.length) {
    result.push(arr2[i2]);
    i2++;
  }
  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const arr1 = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const arr2 = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return merge(arr1, arr2);
};

console.log('mergeSort');
console.log(mergeSort([10, 15, 27, 86, 2, 5, 16, 42, 100, 52, 13]));

// quickSort

const pivot = (arr, start = 0, end = arr.length) => {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

let myArr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

console.log('quickSort');
console.log(quickSort(myArr));

// radixSort

const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = nums => {
  let max = -Infinity;
  nums.forEach(num => {
    max = Math.max(digitCount(num), max);
  });
  return max;
};

const radixSort = arr => {
  const digitCount = mostDigits(arr);
  for (let k = 0; k < digitCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

console.log('radixSort');
console.log(radixSort([15, 3, 5, 163, 6125, 34, 2]));

// data structures

// singly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let myVal = new Node(val);
    if (this.head === null) {
      this.head = myVal;
      this.tail = myVal;
    } else {
      this.tail.next = myVal;
      this.tail = myVal;
    }
    this.length++;
  }
}

let list = new SinglyLinkedList();
