function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], newKey));
        } else {
            acc[newKey] = obj[key];
        }
        return acc;
    }, {});
}

const nestedObject = { a: { b: { c: 1 } }, d: 2 };
console.log(flattenObject(nestedObject));
// { "a.b.c": 1, "d": 2 }
