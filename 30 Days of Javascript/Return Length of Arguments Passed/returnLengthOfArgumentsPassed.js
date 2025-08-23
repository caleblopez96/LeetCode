// Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

function argumentsLength(...args) {
  return args.length;
}

console.log(argumentsLength(1, [], {})); // 3

/**
 * argumentsLength(1, () => x, {}); // 3
 */

// Step by step:

// Step 1: Use rest parameters (...args) to capture all arguments passed to the function
//    - This creates an array called args containing every argument

// Step 2: Return the length of the args array to get the number of arguments
//    return args.length
