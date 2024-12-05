function secondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1] || null; // Handle cases with fewer than 2 unique numbers
}

console.log(secondLargest([10, 20, 30, 20, 10])); // 20
