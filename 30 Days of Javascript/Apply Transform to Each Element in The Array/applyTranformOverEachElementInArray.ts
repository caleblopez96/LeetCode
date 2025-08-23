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

//@ts-ignore: duplicate function name
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
}

// Step by step:

// 1. Loop through each element of the array:
//    for (let i: number = 0; i < arr.length; i++;) {}

// 2. Apply the function to each element of the array (with its index)
//    fn(arr[i], i);

// 3. Replace the element in the original array with the result:
//    arr[i] = fn(arr[i], i);
