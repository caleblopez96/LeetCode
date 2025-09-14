function getConcatenation(nums: number[]): number[] {
    let copy: number[] = nums;
    let ans: number[] = copy.concat(nums);
    return ans;
}
