## 35.Search Insert Position
[See problem in LeetCode](https://leetcode.com/problems/search-insert-position/description/)   

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with ```O(log n)``` runtime complexity.

Example 1:   
Input: nums = [1,3,5,6], target = 5   
Output: 2  


Example 2:                
Input: nums = [1,3,5,6], target = 2  
Output: 1 


#### Constrains:
- 1 <= nums.length <= $10^4$
- $-10^4$ < nums[i] < $10^4$ 
- ```nums```contains distinct values sorted in ascending order.
- $-10^4$ < target < $10^4$


### 🚨 **Important:**

- Nums are sorted in ascending order
- Write an algorithm with ```O(log n)``` runtime complexity
- If target is not found, return the insertion positon 

---
### 🌟🌟 **Intuition:** Use Binary Search

- Since nums are in sorted order, we could easily elimilate half of the numbers by keep comparing the target with ```nums[midpoint]``` until we found the index of the target, or if not found, return the left pointer as the insertion position for target.

#### ⏱️ Timing Complexity: O(log n)

#### 🗯️ Space Complexity: O(1)

### 💡💡 **`Code`**

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left)/ 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

```

