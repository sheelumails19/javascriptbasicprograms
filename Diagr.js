function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}

// Driver code
let arr = [2, 3, 4, 10, 40];
let x = 10;

// Function call
let result = search(arr, x);
if (result === -1) {
    console.log("Element is not present in the array");
} else {
    console.log("Element is present at index " + result);
}

// Output :- Element is present at index 3