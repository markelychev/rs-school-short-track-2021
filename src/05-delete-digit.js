/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const dig = n
    .toString()
    .split('')
    .sort((a, b) => a - b);
  return +n.toString().replace(dig[0], '');
}

module.exports = deleteDigit;
