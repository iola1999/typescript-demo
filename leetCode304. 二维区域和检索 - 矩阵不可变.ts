/*
* 304. 二维区域和检索 - 矩阵不可变
给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。

Range Sum Query 2D
上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。



示例：

给定 matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12


提示：

你可以假设矩阵不可变。
会多次调用 sumRegion 方法。
你可以假设 row1 ≤ row2 且 col1 ≤ col2 。
* */
class NumMatrix {
  prefixSumForEveryRow: number[][] = [];
  constructor(matrix: number[][]) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      this.prefixSumForEveryRow.push([]);
      this.prefixSumForEveryRow[rowIndex].push(0);
      for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        this.prefixSumForEveryRow[rowIndex].push(
          this.prefixSumForEveryRow[rowIndex][colIndex] + matrix[rowIndex][colIndex]
        );
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let result = 0;
    for (let rowIndex = row1; rowIndex <= row2; rowIndex++) {
      result +=
        this.prefixSumForEveryRow[rowIndex][col2 + 1] - this.prefixSumForEveryRow[rowIndex][col1];
    }
    return result;
  }
}

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // 8
