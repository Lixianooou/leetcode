## 977. Squares of a Sorted Array
[See problem in LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/description/)   

Given an integer array ```nums``` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:   
Input: nums = [-4,-1,0,3,10]   
Output: [0,1,9,16,100]   
Explanation: After squaring, the array becomes [16,1,0,9,100].   
After sorting, it becomes [0,1,9,16,100].   


Example 2:                
Input: nums = [-7,-3,2,3,11]   
Output: [4,9,9,49,121] 


#### Constrains:
- 1 <= nums.length <= $10^4$
- $-10^4$ <= nums[i] <= $10^4$ 
- ```nums``` is sorted in non-decreasing order.


### 🚨 **Important:**

- ```nums``` is sorted in non-decreasing order

---
### 🌟🌟 **Intuition:** Use Two Pointers

- Given that nums is non-decreasing, the largest squared values must come from either the left most index (most negative value, e.g., -5 → 1)) or right most index (largest positive value, e.g., 3 → 9).
- Therefore, we can use left and right pointer pointing at the start and end index of nums:   
(1) Comparing the squared values at the left and right pointers.    
(2) Placing the larger squared value at the end of the result array.   
(3) Moving the respective pointer inward until all elements are processed.



#### ⏱️ Timing Complexity: O(n)

#### 🗯️ Space Complexity: O(1)

### 💡💡 **`Code`**

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0;
    let r = nums.length - 1, index = nums.length - 1;
    let result = [];
    
    while (l <= r) {
        let lVal = nums[l] * nums[l];
        let rVal = nums[r] * nums[r];
        if (lVal >= rVal) {
            result[index] = lVal;
            l++;
        }else {
            result[index] = rVal;
            r--;
        }
        index--;
    }
    return result;
};


```

