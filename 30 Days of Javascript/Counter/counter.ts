/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

//@ts-ignore: duplicate function names
function createCounter(n: number): () => number {
  return function (): number {
    return n++;
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Step by step:

// Step 1: return a function that increase the count of the param passed to the createCounter() function
//    return function() { return n++ }
