function findCommonElements(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
