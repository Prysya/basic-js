import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {string}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let temp = "";
  let count = 1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i + 1] === str[i]) {
      count += 1;
    } else {
      temp += count > 1 ? count + str[i] : str[i];
      count = 1;
    }
  }

  return temp;
}
