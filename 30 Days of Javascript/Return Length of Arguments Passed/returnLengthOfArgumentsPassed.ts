//@ts-nocheck
// Write a function argumentsLength that returns the count of arguments passed to it.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

/**
 * argumentsLength(1, () => x, {}); // 3
 */

// Step by step:

// Step 1: Use rest parameters (...args) to capture all arguments passed to the function
//    - This creates an array called args containing every argument

// Step 2: Return the length of the args array to get the number of arguments
//    return args.length
