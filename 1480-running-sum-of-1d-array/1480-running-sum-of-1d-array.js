/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = 0; // (1, 3, 6, 10)
    
    for(let i = 0; i < nums.length; i++){
        count += nums[i] // (0 + 1 = 1), (1 + 2 = 3), (3 + 3 = 6), (6 + 4 = 10)
        nums[i] = count  // change each index of nums with count
    }
    return nums
};