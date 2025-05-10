function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const group = obj[key];
        acc[group] = acc[group] || [];
        acc[group].push(obj);
        return acc;
    }, {});
}

const items = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" }
];

console.log(groupBy(items, "type"));