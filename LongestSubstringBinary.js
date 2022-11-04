// Example 2: You are given a binary substring s
// (a string containing only "0" and "1").
// An operation involves flipping a "0" into a "1".
// What is the length of the longest substring containing only "1" after
// performing at most one operation?

// For example, given s = "1101100111",
// the answer is 5. If you perform the operation at index 2,
// the string becomes 1111100111.

// Use sliding window.
// Define left bound =0, Curr=0 , Right Bound=0 , trigger (Boolean) = false ans=0;
// for(right, right < str.length,right++)
// {curr+= right
//if(str[right] == 0 && !trigger)  ->
//trigger = true and str[right] = '1';}
//

//while (str[right] == 0){
// left == right + 1
// while(left=== 0){
//left++
//if right< left ? right = left
//}
//}

//  ans = Math.Max(ans, right - left + 1)

const longestStringBinary = (str) => {
  let left = 0,
    trigger = false,
    ans = 0;
  for (let right = 0; right < str.length; right++) {
    if (str[right] == '0' && !trigger) {
      trigger = true;
      str = str.replace('0', '1');
    }

    while (str[right] == '0') {
      left = right + 1;
      right++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans + ' ' + str;
};

console.log(longestStringBinary('1101100111'));
