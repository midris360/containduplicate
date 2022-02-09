
/*
Given an integer array nums, return true if any value appears at
least twice in the array meaning duplicate integers in the array,
and return false if every element is distinct.



Still don't know what the constraints mean

1 less than or equal to nums.length less than or equal to 10
to the 5th power
negative 10 to the 9th power less than or equal to nums[i] 
less than or equal to 10 to the 9th power
*/

//////////////////////////////////////////////////
var containsDuplicate = function(nums) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            return true;
        }
        obj[nums[i]] = true;
    }
    return false;
};

nums = [1, 2, 1];
console.log(containsDuplicate(nums));