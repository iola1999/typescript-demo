//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例：
//二叉树：[3,9,20,null,null,15,7],
//
//
//    3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层序遍历结果：
//
//
//[
//  [3],
//  [9,20],
//  [15,7]
//]
//
// Related Topics 树 广度优先搜索 二叉树
// 👍 968 👎 0

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//leetcode submit region begin(Prohibit modification and deletion)

function levelOrder(root: TreeNode | null): number[][] {
  const res = []
  if(!root) return []
  const queue = [root]
  while(queue.length){
    // 这一层的
    const level = []
    for(let i=0;i<queue.length;i++){

    }
    res.push(level)

  }
}

//leetcode submit region end(Prohibit modification and deletion)
