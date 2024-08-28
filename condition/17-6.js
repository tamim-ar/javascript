const age = 25;
const hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You are eligible to drive.");
    } else {
        console.log("You are of age but do not have a license.");
    }
} else {
    console.log("You are not eligible to drive.");
}