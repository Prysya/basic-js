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
export default function getDNSStats(domains) {
  return domains
    .reduce(
      (acc, domainString) =>
        acc.concat(
          domainString
            .split(".")
            .reverse()
            .reduce(
              (tempAcc, domain, index) =>
                tempAcc.concat(
                  index === 0
                    ? "." + domain
                    : tempAcc[tempAcc.length - 1] + "." + domain
                ),
              []
            )
        ),
      []
    )
    .reduce((obj, item) => ({ ...obj, [item]: (obj[item] || 0) + 1 }), {});
}
