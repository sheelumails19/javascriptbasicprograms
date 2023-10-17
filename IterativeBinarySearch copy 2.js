function binarySearch(arr, x) {
    let l = 0;
    let r = arr.length - 1;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        // Check if x is present at mid
        if (arr[m] === x) {
            return m;
        }
        
        // If x is greater, ignore the left half
        if (arr[m] < x) {
            l = m + 1;
        }
        
        // If x is smaller, ignore the right half
        else {
            r = m - 1;
        }
    }
    
    // If we reach here, then the element was not present
    return -1;
}

// Driver code
let arr = [2, 3, 4, 10, 40];
let x = 3;
let result = binarySearch(arr, x);
if (result === -1) {
    console.log("Element is not present in the array");
} else {
    console.log("Element is present at index " + result);
}

//Output :-  Element is present at index 1

