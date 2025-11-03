const solution = require('./solution.cjs');
// Solution modules contains the mergeTimeRanges function
// I used cjs as my environment and node js 22 was forcing ESM.

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;

console.log(solution.mergeTimeRanges(ranges, threshold));
