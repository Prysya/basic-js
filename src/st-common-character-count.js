import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let temp = s2;
  
  for (let i = 0; i < s1.length; i += 1) {
    const word = s1[i];
    
    if (temp.includes(word)) {
      temp = temp.replace(word, '');
      count += 1;
    }
  }
  
  return count;
}
