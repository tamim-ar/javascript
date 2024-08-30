// Declare and initialize variables
let name = 'John'; // String variable
let age = 30; // Number variable
let isStudent = true; // Boolean variable
let hobbies = ['reading', 'gaming', 'coding']; // Array variable
let address = { // Object variable
    street: '123 Main St',
    city: 'Anytown',
    zip: '12345'
};

// Print the values of the variables to the console
console.log('Name:', name);
console.log('Age:', age);
console.log('Is Student:', isStudent);
console.log('Hobbies:', hobbies);
console.log('Address:', address);

// Modify the value of a variable
age = 31;
console.log('Updated Age:', age);

// Use variables in a function
function introduce() {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

// Call the function
introduce();