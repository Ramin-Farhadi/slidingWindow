/*Example 3: 713. Subarray Product Less Than K.

Given an array of positive integers nums and an integer k,
 return the number of contiguous subarrays where the product of all the
  elements in the subarray is strictly less than k.

For example, given the input nums = [10, 5, 2, 6], k = 100,
 the answer is 8. The subarrays with products less than k are:

[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

Key idea: Whenever you see a problem asking for the number of subarrays,
 think of this: at each index, how many valid subarrays end at this index?
  Let's split the 8 subarrays by their ending <indices:></indices:> 
*/

const productLessThanK = (arr, k) => {
  let left = 0,
    right = 0,
    ans = 0,
    curr = 1;

  for (right = 0; right < arr.length; right++) {
    curr *= arr[right];
    while (left <= right && curr >= k) {
      curr /= arr[left];
      left++;
    }
    ans += right - left + 1;
  }
  return ans;
};

console.log(productLessThanK([10, 5, 2, 6], 100));
