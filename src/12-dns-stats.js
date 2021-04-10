/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  domains
    .map((val) => val.split('.').reverse())
    .forEach((item) => {
      item.reduce((str, val) => {
        const newDns = `${str}.${val}`;
        dns[newDns] = dns[newDns] ? ++dns[newDns] : 1;
        return newDns;
      }, '');
    });
  return dns;
}

module.exports = getDNSStats;
