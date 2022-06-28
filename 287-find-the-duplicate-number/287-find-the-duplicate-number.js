/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map={};
    let result;

    nums.forEach(num=>{
        if(map[num]){
            result = num;
        }
        map[num]=num;
    });
    return result;
};