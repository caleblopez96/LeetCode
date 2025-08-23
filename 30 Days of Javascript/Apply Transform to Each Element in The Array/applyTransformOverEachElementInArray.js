/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// SOLUTION 1:

function map(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
}

// SOLUTION 2:

function map2(arr, fn) {
  let i = 0;
  for (const num of arr) {
    arr[i] = fn(num, i);
    i++;
  }
  return arr;
}

// Step by step:

// 1. Loop through each element of the array.
//    Solution 1: for (let i = 0; i < arr.length; i++) {}
//    Solution 2: for (const num of arr) { track i manually }

// 2. Apply the function to the element (with its index)
//    Solution 1: fn(arr[i], i);
//    Solution 2: fn(num, i);

// 3. Replace the element in the original array with the result.
//    Solution 1: arr[i] = fn(arr[i], i);
//    Solution 2: arr[i] = fn(num, i)

// 4. After finishing, return the array.
//    return arr;
