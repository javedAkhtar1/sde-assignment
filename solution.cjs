/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  // Your code here     
  ranges.sort((a,b) => a[0] - b[0])
  const merged = [ranges[0]]

  for (let i=0; i<ranges.length; i++) {
    const last = merged[merged.length - 1]
    const current = ranges[i]

    if (current[0] <= last[1] + threshold) {
      last[1] = Math.max(last[1], current[1])
    } 
    else {
      merged.push(current)
    }
  }
  return merged;
}

module.exports = {
	mergeTimeRanges
}