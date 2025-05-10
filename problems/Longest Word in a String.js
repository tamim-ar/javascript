function findLongestWord(str) {
    return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

console.log(findLongestWord("JavaScript is awesome")); 