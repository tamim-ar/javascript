const name = "Tamim Ahasan Rijon";

// for (const letter of name){
//     console.log(letter);
// }

let reverse = '';
for (const letter of name){
    reverse = letter + reverse;
}

console.log(reverse);