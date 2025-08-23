/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
*/
type F = (x: number) => number;

//@ts-ignore: duplicate function name
function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x) => x;
  }
  return function (x): number {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Step-by-step:

// 1. If no functions are given, return identity function (f(x) = x).
// if (functions.length === 0) {return (x) => x;}

// 2. Otherwise, build a new function:
//    - Start with input x --> return function(x){}
//    - Apply the last function in the array first, then move left --> functions.reduceRight((acc, fn) => fn(acc), x);
//    - Each result is passed as input to the next function --> (fn(acc), x)
// 3. Return the final result.
