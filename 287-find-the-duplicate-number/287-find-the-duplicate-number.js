/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map();
    for (let num of nums) {
        if (map.get(num)) {
            return num;
        } else {
            map.set(num, 1);
        }
    }
    
    return null;
};