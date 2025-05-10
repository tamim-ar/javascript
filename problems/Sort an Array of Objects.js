function sortByKey(arr, key) {
    return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];

console.log(sortByKey(users, "age")); 