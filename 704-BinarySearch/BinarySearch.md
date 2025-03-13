## 704. Binary Search
[See problem in LeetCode](https://leetcode.com/problems/binary-search/description/)   

Given an array of integers **nums** which is sorted in ascending order, and an integer **target**, write a function to search **target** in **nums**. If target exists, then return its index. Otherwise, return **-1**.

You must write an algorithm with **O(log n)** runtime complexity.

Example 1:   
Input: nums = [-1,0,3,5,9,12], target = 9   
Output: 4   
Explanation: 9 exists in nums and its index is 4      


Example 2:                
Input: nums = [-1,0,3,5,9,12], target = 2   
Output: -1   
Explanation: 2 does not exist in nums so return -1   

#### Constrains:
- 1 <= nums.length <= $10^4$ 
- $-10^4$ < nums[i], target < $10^4$   
- All the integers in nums are unique.   
- nums is sorted in ascending order.


### 🚨 **Important:**

- Nums are sorted in ascending order
- write an algorithm with **O(log n)** runtime complexity

---

### 🌟🌟 **Intuition:** Use Binary Search

- Since nums is sorted in ascending order, we can leverage the midpoint to efficiently split the array into two halves repeatly until we find the target or exahust the arry (when left > right)

#### ⏱️ Timing Complexity: O(log n)

#### 🗯️ Space Complexity: O(1)

### 💡💡 **`Code`**

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor( (right + left) / 2);
        if (nums[mid] === target) {
           return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            return  right = mid - 1;
        }
    }
    return -1;
}

```

