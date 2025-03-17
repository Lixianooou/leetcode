## 94. Binary Tree Inorder Traversal (Iterative)
[See problem in LeetCode](https://leetcode.com/problems/binary-tree-inorder-traversal/description/)   

Given the root of a binary tree, return the inorder traversal of its nodes' values.


Example 1:   
Input: root = [1,null,2,3]    
Output: [1,3,2]   
Explanation:     
![example1](./screenshot-2024-08-29-202743.png)     


Example 2:                
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]   
Output: [4,2,6,5,7,1,3,9,8]   
Explanation:    
![example2](./tree_2.png)   

Example 3:   
Input: root = []    
Output: []   
  

#### Constrains:
- The number of nodes in the tree is in the range **[0, 100]**.
- **-100 <= Node.val <= 100** 


---

### 🌟🌟 **Intuition:** Use Stack

- In-order traversal goes through the nodes in the order left -> root -> right. To do this with a stack, we can start at the root node and keep moving left, pushing each node onto the stack until we exhausted all left nodes. After hitting the leftmost node, we can pop the top node from the stack and process it (pushing its value into the result[]), and then move to its right subtree. Repeat this process(going left, processing, and moving right) until the stack is empty and all nodes are visited.

#### ⏱️ Timing Complexity: O(n)

#### 🗯️ Space Complexity: O(h) if balance

### 💡💡 **`Code`**

```JavaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function(root) {
      let curr = root, stack = [], result = [];
    if (root === null) {
        return result;
    }

    while(curr || stack.length) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            result.push(curr.val);
            curr = curr.right
        }
    }
    return result;
}

```

