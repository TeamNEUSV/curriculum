/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const solution = (row, col, arr = [], rowIndex = 0, columnIndex = 0) => {
  if (rowIndex >= row) return arr

  if (columnIndex === 0) {
    arr.push([])
  }
  if (columnIndex < col) {
    arr[rowIndex].push(0)
    return solution(row, col, arr, rowIndex, columnIndex + 1)
  }
  return solution(row, col, arr, rowIndex + 1, 0)
}

module.exports = {
  solution
}
