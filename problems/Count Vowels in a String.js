function countVowels(str) {
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Hello World")); 