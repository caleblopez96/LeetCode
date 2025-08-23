/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/

// @ts-ignore: duplicate type name
type Fn = (accum: number, curr: number) => number;

//@ts-ignore: duplicate function name
function reduce(nums: number[], fn: Fn, init: number): number {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
}

// SOLUTION 2:
//@ts-ignore: duplicate function name
function reduce(nums: number[], fn: (acc: number, curr: number) => number, init: number): number {
  let val: number = init;
  for (const num of nums) {
    val = fn(val, num);
  }
  return val;
}

// Step by step:

// 1. Create an accumulator:
//    let val = init;

// 2. Iterate through the array:
//    for (let i = 0; i < nums.length; i++) {}
//    OR
//    for (const num of nums) {}

// 3. Update the accumulator during each iteration:
//    In the for loop version, access each element by index: val = fn(val, nums[i]);
//    In the for...of loop, access each element directly: val = fn(val, num)

// 5. Return the accumulated result:
//    return val;
