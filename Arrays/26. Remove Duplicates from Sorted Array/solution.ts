//@ts-ignore: duplicate function name

function removeDuplicates(nums: number[]): number {
  let index: number = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}
