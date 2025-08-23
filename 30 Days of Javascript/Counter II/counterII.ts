/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

//@ts-ignore: duplicate function name
function createCounterII(init: number): Counter {
  let current = init;

  return {
    increment: () => {
      current++;
      return current;
    },
    decrement: () => {
      current--;
      return current;
    },
    reset: () => {
      current = init;
      return current;
    },
  };
}

/**
 * const counter = createCounterIITS(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Step by step:

// 1. Create a variable to store the current value, initialized to init:
//    let current = init;
//    - this variable is in the closure so each method can access and modify it

// 2. Return an object with three methods: increment, decrement, and reset

// 3. increment():
//    - Increases current by 1: current++
//    - Returns the updated value

// 4. decrement():
//    - Decreases current by 1: current--
//    - Returns the updated value

// 5. reset():
//    - Sets current back to the original init value: current = init
//    - Returns the reset value

// 6. Each method maintains access to current through closure
//    - This allows the state to persist between method calls without exposing current directly
