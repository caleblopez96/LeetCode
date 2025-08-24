# Two Sum Solution

After reading the description brute force solution popped out to me: loop through the array and compare each element array[i] with every other element array[j] (where j starts at i + 1). If array[i] + array[j] equal the target, then return the two indices. If no elements in the array add up to the target, just return an empty array.

Step by step:

1. Create a loop `i` to go through each element of the array:

```typescript
for (let i = 0; i < nums.length; i++) {}
```

2. Create an inner loop `j` that starts at `i + 1`:

```typescript
for (let j = i + 1; i < nums.length; i++) {}
```

3. for each pair (array[i], array[j]), check if their sum equals the targets

```typescript
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; i < nums.length; i++) {}
}
```

4. If the sum matches the target, return the two indices

```typescript
if (nums[i] + nums[j] === target) {
  return [i, j];
}
```

- 5. If no pairs match, return an empty array

```typescript
return [];
```

FULL SOLUTION:

```typescript
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```
