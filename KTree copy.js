function binarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = Math.floor(l + (r - l) / 2);

        // If the element is present at the middle itself
        if (arr[mid] === x)
            return mid;

        // If the element is smaller than mid, it can only be present in the left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);

        // Otherwise, the element can only be present in the right subarray
        return binarySearch(arr, mid + 1, r, x);
    }

    // We reach here when the element is not present in the array
    return -1;
}

// Driver code
let arr = [2, 3, 4, 10, 40];
let x = 40;
let result = binarySearch(arr, 0, arr.length - 1, x);
if (result === -1) {
    console.log("Element is not present in the array");
} else {
    console.log("Element is present at index " + result);
}

// Output :- Element is present at index 4