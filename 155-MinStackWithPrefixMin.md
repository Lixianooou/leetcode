## 155. Min Stack
[See problem in LeetCode](https://leetcode.com/problems/min-stack/description/)   

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the ```MinStack``` class:

MinStack() initializes the stack object.   
```void push(int val)``` pushes the element val onto the stack.   
```void pop() ```removes the element on the top of the stack.   
```int top()``` gets the top element of the stack.   
```int getMin()``` retrieves the minimum element in the stack.   
You must implement a solution with``` O(1)``` time complexity for each function.

Example 1:   
Input   
["MinStack","push","push","push","getMin","pop","top","getMin"]   
[[],[-2],[0],[-3],[],[],[],[]]

Output    
[null,null,null,null,-3,null,0,-2]

Explanation   
MinStack minStack = new MinStack();    
minStack.push(-2);   
minStack.push(0);   
minStack.push(-3);   
minStack.getMin(); // return -3   
minStack.pop();   
minStack.top();    // return 0   
minStack.getMin(); // return -2   


#### Constrains:
- $-2^{31}$ <= ```val``` <= $2^{31}$ 
- Methods ```pop```, ```top ```and ```getMin``` operations will always be called on non-empty stacks.
- At most 3 * $10^4$ calls will be made to ```pop```, ```top ```, ```pop```, and ```getMin```.


### 🚨 **Important:**

- Each function is implemented with ``` O(1)``` time complexity.

---
### 🌟🌟 **Intuition:** Use Prefix Min to keep track of the min element in stack with O(1) time complexity
- prefixMin[i + 1] =  Math.min(prefix[i], val);


#### ⏱️ Timing Complexity: O(1)

#### 🗯️ Space Complexity: O(n)

### 💡💡 **`Code`**

```JavaScript
var MinStack = function() {
    this.stack = [];
    this.prefixMin = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.prefixMin.length === 0) {
        this.prefixMin.push(val);
    } else {
        this.prefixMin.push(Math.min(this.prefixMin[this.prefixMin.length - 1], val))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.prefixMin.pop();
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.prefixMin[this.prefixMin.length - 1]
};

```

