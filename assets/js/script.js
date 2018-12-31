const averagePair = (arr, num) => {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === num) {
      return true;
    } else if ((arr[left] + arr[right]) / 2 > num) {
      right --;
    } else if ((arr[left] + arr[right]) / 2 < num) {
      left ++;
    }
  }
  return false;
}