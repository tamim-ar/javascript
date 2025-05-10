function romanToInt(roman) {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanMap[roman[i]];
        const next = romanMap[roman[i + 1]];

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
}

console.log(romanToInt("XIV")); 
console.log(romanToInt("MCMXCIV")); 