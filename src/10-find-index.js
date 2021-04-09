/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function search(data, val, start, end) {
    if (end - start === 1) {
      return data[start] === val ? start : end;
    }
    const mid = Math.round((start + end) / 2);
    if (data[mid] < val) {
      return search(data, val, mid, end);
    }
    if (data[mid] > val) {
      return search(data, val, start, mid);
    }
    return mid;
  }
  return search(array, value, 0, array.length - 1);
}

module.exports = findIndex;
