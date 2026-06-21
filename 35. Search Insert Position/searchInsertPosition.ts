function searchInsert(nums: number[], target: number): number {
    let index: number = nums.indexOf(target);

    if (index === -1) {
        nums.push(target);
        nums.sort((a, b) => a - b);
        index = nums.indexOf(target);
    }
    return index;
}
