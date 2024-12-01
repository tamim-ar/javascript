// Loop through numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Check if the number is divisible by 3
    if (i % 3 === 0) {
        // Skip the current iteration and continue to the next one
        continue;
    }

    // Check if the number is greater than 7
    if (i > 7) {
        // Exit the loop
        break;
    }

    // Print the number
    console.log(i);
}