function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const total = (n * (n + 1)) / 2; 
    const sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); 
