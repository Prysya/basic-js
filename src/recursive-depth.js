/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
      let depth = 1;
      let maxDepth = 0;
      
      for (const item of arr) {
        if (Array.isArray(item)) {
          maxDepth = Math.max(this.calculateDepth(item), maxDepth);
        }
      }
      
      return depth + maxDepth;
  }
}
