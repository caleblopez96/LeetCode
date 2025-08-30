function search(nums: number[], target: number): number {
    let left = 0; // start of array index
    let right = nums.length - 1; // end of array index
    console.log(right);

    while (left <= right) {
        // while there’s still a range to search
        let mid = Math.floor((left + right) / 2); // middle index

        if (nums[mid] === target) {
            // found it
            return mid;
        } else if (nums[mid] < target) {
            // target is bigger → search right half
            left = mid + 1;
        } else {
            // target is smaller → search left half
            right = mid - 1;
        }
    }

    return -1; // not found
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));

// Step by step:

// create variable to keep track of start index of array -> let left = 0;

// create variable to keep track of end index of array -> let right = nums.length -1

// while left is less than or equal to right -> while(left <= right)

//  create variable to split array in half -> let mid = Math.floor((left + right) / 2)

//  check if the middle value is equal to your target, if so search ends -> if(nums[mid] === target) return mid;

//  else check if the value in the middle of the array is less than the target -> else if(nums[mid] < target)

//    if the target is bigger, search the right half -> left = mid + 1 (the left value now becomes mid + 1)

//  else target is smaller so we search the left half -> right = mid -1

// if no target found, return -1

function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
        let middle: number = Math.floor((left + right) / 2);
        if (middle === target) {
            return middle;
        } else if (target > middle) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 9));
