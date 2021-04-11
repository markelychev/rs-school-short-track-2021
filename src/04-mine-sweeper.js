/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, i) => {
    const newMatrix = row.map((_item, k) => {
      const up = +(i - 1 >= 0 ? matrix[i - 1][k] : 0);
      const bottom = +(i + 1 <= matrix.length - 1 ? matrix[i + 1][k] : 0);
      const left = +(k - 1 >= 0 ? matrix[i][k - 1] : 0);
      const right = +(k + 1 <= row.length - 1 ? matrix[i][k + 1] : 0);
      const lu = +(k - 1 >= 0 && i - 1 >= 0 ? matrix[i - 1][k - 1] : 0);
      const lb = +(k - 1 >= 0 && i + 1 <= matrix.length - 1
        ? matrix[i + 1][k - 1]
        : 0);
      const ru = +(k + 1 <= row.length - 1 && i - 1 >= 0
        ? matrix[i - 1][k + 1]
        : 0);
      const rb = +(k + 1 <= row.length - 1 && i + 1 <= matrix.length - 1
        ? matrix[i + 1][k + 1]
        : 0);
      return up + bottom + left + right + lu + lb + ru + rb;
    });
    return newMatrix;
  });
}

module.exports = minesweeper;
