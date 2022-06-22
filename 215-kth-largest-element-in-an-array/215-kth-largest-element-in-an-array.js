/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
     let length = nums.length;
    let rs = nums.sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6]
    console.log(rs); 
    return rs[length - k] 
};