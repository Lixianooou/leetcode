## 844. Backspace String Compare
[See problem in LeetCode](https://leetcode.com/problems/backspace-string-compare/description/)   

Given two strings ```s``` and ```t```, return true if they are equal when both are typed into empty text editors. ```'#' ``` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:   
Input: s = "ab#c", t = "ad#c"   
Output: true   
Explanation: Both s and t become "ac".   


Example 2:                
Input: s = "ab##", t = "c#d#"    
Output: true    
Explanation: Both s and t become "".   

Example 3:                
Input: s = "a#c", t = "b"   
Output: false   
Explanation: s becomes "c" while t becomes "b". 


#### Constrains:
- ```1 <= s.length, t.length <= 200```
- ```s``` and ```t``` only contain lowercase letters and ```'#'``` characters.


### 🚨 **Important:**

- ```s``` and  ```t```  are immutable in JavaScript 

---
### 🌟🌟 **Intuition:** Use Stack or Two Pointers

- For the stack approach:   
(1) For the stack approach, we push a character (```char```) from str onto the stack if it is not a ```'#'```.  
(2) If it is a ```'#'```, we pop the stack to ensure the previous character is deleted.
- For the two pointers approach:  
(1) We initialize a left pointer to track the current valid index position. Its smallest possible value is -1 (indicating an empty result).    
(2) The right pointer traverses through str to process each character.   
 If the right pointer is at '#', move the left pointer backward by one step (if left >= 0) or do nothing (left = -1).   
 If the right pointer is not at '#', Move the left pointer forward by one step.If left and right are not pointing to the same character, swap their values to ensure the left pointer always tracks valid content in str.



#### ⏱️ Timing Complexity: O(n)

#### 🗯️ Space Complexity: O(1)

### 💡💡 **`Stack Approach`**

```JavaScript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return strProcessor(s) === strProcessor(t);
};

function strProcessor (str) {
    let stack = [];
    for (let char of str) {
        if (char === "#") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join("");

}

```

### 💡💡 **`Two Pointers Approach`**

```JavaScript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return strProcessor(s) === strProcessor(t);
};

function strProcessor (str) {
    let strArr = str.split("");  //str is immutable in JavaScript
    let l = -1, r = -1;
    while (r < strArr.length - 1) {
        r++;
        if (strArr[r] === "#") {
            if (l >= 0) {
                l--;
            } 
        } else {
            l++;
            if (l !== r) { //swap to ensure left pointer keeps tracks of valid chars
                strArr[l] = strArr[r];
            }
        }
    }
    if (l === -1) {
        return "";
    } else {
        return strArr.join('').slice(0,l + 1);
    }
}


```
