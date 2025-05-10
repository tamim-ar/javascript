function secondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1] || null; 
}

console.log(secondLargest([10, 20, 30, 20, 10])); 