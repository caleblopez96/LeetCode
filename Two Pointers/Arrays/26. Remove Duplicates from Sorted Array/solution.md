# 26. Remove Duplicates from Sorted Array

- Understand that this is a Two Pointers problem.

- Understand that the problem does not require completely removing elements from the array. Instead, overwrite duplicates in place with the next unique element.

- The array’s first k elements (where k is the returned length) contain the unique values.

- Any leftover elements after that are irrelevant.

- EXAMPLE:

removeDuplicates([0, 0, 1, 1, 2]) --> 3 ([0, 1, 2, 1, 2])

## Iteration Breakdown:

### First iteration (i = 0):

```js
const array = [0, 0, 1, 1, 2];
function removeDuplicates(nums) {
  let index = 1;
  // while i < 4
  for (let i = 0; i < nums.length - 1; i++) {
    // Compare nums[0] with nums[1]: 0 != 0 --> FALSE (do NOT enter if block)
    if (nums[i] != nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}
// array at this state is still [0, 0, 1, 1, 2] (unchanged)
// index is still 1
```

### Second iteration (i = 1):

```js
const array = [0, 0, 1, 1, 2]; // current state from previous iteration
function removeDuplicates(nums) {
  let index = 1;
  // while i < 4
  for (let i = 1; i < nums.length - 1; i++) {
    // Compare nums[1] with nums[2]: 0 != 1 --> TRUE (enter if block)
    if (nums[i] != nums[i + 1]) {
      // nums[1] = nums[2] = 1, then index becomes 2
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}
// array at this state is [0, 1, 1, 1, 2]
// index is now 2
```

### Third iteration (i = 2):

```js
const array = [0, 1, 1, 1, 2]; // current state from previous iteration
function removeDuplicates(nums) {
  let index = 2;
  // while i < 4
  for (let i = 2; i < nums.length - 1; i++) {
    // Compare nums[2] with nums[2]: 1 != 1 --> FALSE (do NOT enter if block)
    if (nums[i] != nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}
// array at this state is still [0, 1, 1, 1, 2] (unchanged)
// index is still 2
```

### Fourth iteration (i = 3):

```js
const array = [0, 1, 1, 1, 2]; // current state from previous iteration
function removeDuplicates(nums) {
  let index = 2; // current value from previous iteration
  // while i < 4
  for (let i = 3; i < nums.length - 1; i++) {
    // Compare nums[3] with nums[4]: 1 != 2 --> TRUE (enter if block)
    if (nums[i] != nums[i + 1]) {
      // nums[2] = nums[4] = 2, then index becomes 3
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}
// array at this state is [0, 1, 2, 1, 2]
// index is now 3
```

Loop ends (i = 4 would exceed the condition i < 4)Final Result:

Array: [0, 1, 2, 1, 2]
Return value: 3
The first 3 elements [0, 1, 2] contain all unique values
The remaining elements [1, 2] are leftover and should be ignored

## Pointers:

### Pointer i: Loops through the array to check each element.

- The pointer `i` is located inside of the for loop:

```js
for (let i = 0; i < nums.length - 1; i++) {}
```

### Pointer index: Keeps track of where the next unique element should go.

```js
let index = 1;
```

- index always points to the position to overwrite with the next unique value.

- Start index = 1 because the first element (index 0) is always unique. (The first element will always be unique and only MIGHT become not unique when compared against the second element.):

  ```js
  const array = [1, 1, 2, 3];
  ```

## Algorithm Logic

The Core Pattern: Detect Transitions Between Different Values

The algorithm works by comparing adjacent elements:

- When nums[i] != nums[i + 1]: We've found the end of a duplicate group
- When nums[i] == nums[i + 1]: We're still in the same duplicate group (skip)

## Misc Notes:

It's important to remember that this solution doesn't "remove duplicates from the array". Instead, it takes a sorted array, moves the unique elements to the front of the array and returns the count of unique elements.
Example:
[0, 0, 1, 1, 2] will end up being [0, 1, 2, 1, 2]

First 3 elements [0, 1, 2] = unique values ✓
Last 2 elements [1, 2] = leftover data (ignore)

REMEMBER: nums.length - 1 is used in the loop condition so that nums[i + 1] doesn't go out of bounds. We stop at the second-to-last element because we're always looking one ahead
