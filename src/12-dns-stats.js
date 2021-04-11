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
  const obj = {};
  let exp = '';

  domains.forEach((el) => {
    exp = '';
    const arr = el.split('.').reverse();

    for (let i = 0; i < arr.length; i++) {
      exp += `.${arr[i]}`;
      if (exp in obj) {
        obj[exp]++;
      } else {
        obj[exp] = 1;
      }
    }
  });

  return obj;
}

module.exports = getDNSStats;
