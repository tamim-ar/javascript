const age = 25;
const hasLicense = true;

const message = age >= 18 
    ? (hasLicense ? "You are eligible to drive." : "You are of age but do not have a license.") 
    : "You are not eligible to drive.";

console.log(message);