## 34.Find First and Last Position of Element in Sorted Array
[See problem in LeetCode](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)   

Given an array of integers ```nums``` sorted in non-decreasing order, find the starting and ending position of a given ```target``` value.

If ```target```  is not found in the array, return ``` [-1, -1]```.

You must write an algorithm with ```O(log n)``` runtime complexity.

Example 1:   
Input: nums = [5,7,7,8,8,10], target = 8   
Output: [3,4]


Example 2:                
Input: nums = [5,7,7,8,8,10], target = 6   
Output: [-1,-1]


#### Constrains:
- 0 <= nums.length <= $10^5$
- $-10^9$ < nums[i] < $10^9$   
- ```nums``` is a non-decreasing array.
- $-10^9$ <= ```target``` <= $10^9$ 


### 🚨 **Important:**

- ```nums``` sorted in non-decreasing order
- Write an algorithm with ```O(log n)``` runtime complexity
- Find both the starting and ending position of a given ```target``` value if exists

---
### 🌟🌟 **Intuition:** Use Binary Search

- Hence target could appears more than once, we need to use BST twice to locate the starting and ending position separately.

#### ⏱️ Timing Complexity: O(log n)

#### 🗯️ Space Complexity: O(1)

### 💡💡 **`Code`**

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    const start = getStart(nums, target);
    const end = getEnd(nums, target);
    return [start, end];
    
}

function getStart(nums, target) {
    let left = 0;
    let right = nums.length;
    let start = -1;

    while (left < right) {
        let mid = Math.floor(left + (right - left)/ 2);
        if (nums[mid] === target) {
            start = mid;
            //keep searching on the left to find the start index
            right = mid;
        } else if (nums[mid] > target){
            right = mid;
        } else {
            left = mid + 1;
        }

    } 
    return start;
}


function getEnd(nums, target) {
    let left = 0;
    let right = nums.length;
    let end = -1;

    while (left < right) {
        let mid = Math.floor(left + (right - left)/ 2);
        if (nums[mid] === target) {
            end = mid;
              //keep searching on the right to find the end index
            left = mid + 1;
        } else if (nums[mid] > target){
            right = mid;
        } else {
            left = mid + 1;
        }

    } 
    return end;
}

```

