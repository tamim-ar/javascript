function countOccurrences(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));