/*Example 4: Given an integer array nums and an integer k,
 find the sum of the subarray with the largest sum whose length is k.
*/

//[3,-1,4,12,-8,5,6]
//k=4

// left curr= sums,  anw, right
// for ( right< arr.lenghth right++) then curr += arr[right]
// while (right - left + 1 === 4){
//curr -= left  then left++
//}
// ans = math.max(ans, curr)

const fixedSizeWindowSum = (arr, k) => {
  let left = 0,
    right = 0,
    ans = 0,
    curr = 0;
  for (right = 0; right < arr.length; right++) {
    curr += arr[right];
    while (right - left + 1 > 4) {
      curr -= left;
      left++;
    }
    ans = Math.max(ans, curr);
  }
  return ans;
};

console.log(fixedSizeWindowSum([-8, 5, 6, 22, -1, 4, 12, -23], 4));
