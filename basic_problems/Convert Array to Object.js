function arrayToObject(arr) {
    return Object.fromEntries(arr);
}

console.log(arrayToObject([["name", "Alice"], ["age", 25]])); // { name: 'Alice', age: 25 }
