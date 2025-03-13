/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * Binary Search Algorithm
 * - Condition: Continue while left <= right
 * - Calculation midpoint: Math.floor((left + right) / 2)
 * - Return:
 *   - If target is found, return the index (mid)
 *   - If target is not found, return -1
 * - Recursive Case: Ensure to return the result of recursive calls
 */

//Interactive
const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return right = mid - 1;
        }
    }
    return -1;
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Recursive1
const searchR1 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1
    const searchHelper = (left, right) => {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            return searchHelper(left, mid - 1);
        } else {
            return searchHelper(mid + 1, right);
        }
    }
    return searchHelper(left, right);
}



/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} left
 * @param {number} right
 * @return {number}
 *
 */

//Recursive2
const searchR2 = (nums, target, left, right) => {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] < target) {
        return searchR2(nums, target, mid + 1, right);
    } else {
        return searchR2(nums, target, left, mid - 1);
    }
}


const nums1 = [-1, 0, 3, 5, 9, 12];
console.log(search(nums1, 9));
console.log(search(nums1, 3));
console.log(search(nums1, 100));
console.log(searchR1(nums1, 9));
console.log(searchR2(nums1, 9, 0, nums1.length - 1));