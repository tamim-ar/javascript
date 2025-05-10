function sumOfDigits(num) {
    return num
        .toString()
        .split('')
        .map(Number)
        .reduce((sum, digit) => sum + digit, 0);
}

console.log(sumOfDigits(12345)); 