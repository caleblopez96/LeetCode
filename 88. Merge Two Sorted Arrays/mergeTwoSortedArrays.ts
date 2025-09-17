function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // get values to merge
    const extractedNums1: number[] = nums1.slice(0, m);
    const extractedNums2: number[] = nums2.slice(0, n);

    // merge them
    const merged = extractedNums1.concat(extractedNums2).sort((a, b) => a - b);

    // overwrite nums1
    nums1.splice(0, nums1.length, ...merged);
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1; // pointer for last valid element in nums1
    let j = n - 1; // pointer for last element in nums2
    let k = m + n - 1; // pointer for the last slot in nums1

    // Fill nums1 from the back
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
}

// Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
// Output: [1, 2, 2, 3, 5, 6];

/* 
1. 
i = m - 1
i = 3 - 1 -> 2
i = 2

j = n - 1
j = 3 - 1 -> 2
j = 2

while(j < 0) -> while(2 < 2)
if(i <= 0 && nums1[i] > nums2[i]) {
    nums1[k]
}
*/
