/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let s = '';
  [...str].reduce((res, val, index) => {
    if (val === str[index + 1]) {
      return res + 1;
    }
    s += `${res > 1 ? res : ''}${val}`;
    return 1;
  }, 1);
  return s;
}

module.exports = encodeLine;
