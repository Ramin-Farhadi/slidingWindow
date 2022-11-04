// Example 1: Given an array of positive integers nums and an integer k,
//  find the length of the longest subarray whose sum is less than or equal to k.

// k = 8

// the Great approach would be Sliding window.
// We need a left and right pointer to start both from Zero index.
// Define Current = 0 and ans = 0

// for (right, right < arr.length, right++ )
// Current += Current + Arr[right];
//   While Current > K then
//   Current -= Arr[left]
//   left --
//   nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] k = 8.
const longestLength = (arr, k) => {
  let current = 0,
    ans = 0,
    left = 0;
  for (let right = 0; right < arr.length; right++) {
    current += arr[right];
    while (current > k) {
      current -= arr[left];
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

console.log(longestLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8));
