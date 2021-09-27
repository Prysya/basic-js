/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  const din = "--discard-next";
  const dip = "--discard-prev";
  const don = "--double-next";
  const dop = "--double-prev";
  const discardedValue = "discarded-value";

  try {
    const answer = [];

    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i += 1) {
        if (
          arr[i] !== din &&
          arr[i] !== dip &&
          arr[i] !== don &&
          arr[i] !== dop
        ) {
          answer.push(arr[i]);
        }

        if (arr[i] === din && i + 1 < arr.length) {
          answer.push(discardedValue);
          i += 1;
        }

        if (arr[i] === dip && answer.length > 0) {
          answer.pop();
        }

        if (arr[i] === don && i + 1 < arr.length) {
          answer.push(arr[i + 1]);
        }

        if (arr[i] === dop && answer.length > 0) {
          const prev = answer.pop();

          answer.push(prev);
          answer.push(prev);
        }
      }

      return answer.filter((item) => item !== discardedValue);
    }

    throw new Error("");
  } catch (err) {
    err.message = "'arr' parameter must be an instance of the Array!";
    throw err;
  }
}
