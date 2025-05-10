function objectToQueryString(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

console.log(objectToQueryString({ name: "Alice", age: 25, city: "New York" }));