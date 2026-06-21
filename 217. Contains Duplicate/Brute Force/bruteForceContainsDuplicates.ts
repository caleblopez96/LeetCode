function bruteForceContainsDuplicates(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(bruteForceContainsDuplicates([1, 2, 3, 1])); // true
console.log(bruteForceContainsDuplicates([1, 2, 3, 4])); // false
