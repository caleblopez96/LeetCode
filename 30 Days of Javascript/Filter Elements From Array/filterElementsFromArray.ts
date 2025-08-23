/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

//@ts-ignore: duplicate type name
type Fn = (n: number, i: number) => any;

//@ts-ignore: duplicate function name
function filter(arr: number[], fn: Fn): number[] {
  let filteredArray: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

// Step by step:

// Step 1: Create an empty array to hold the filtered elements:
//    let filteredArray = []

// Step 2: Loop over the array passed to the filter() function:
//    for (let i = 0; i < arr.length; i++) {}
//    - Call the filtering function on each element and its index: fn(arr[i], i)
//    - If result is truthy, push the element to filteredArray

// Step 3: Return the filtered array:
//    return filteredArray
