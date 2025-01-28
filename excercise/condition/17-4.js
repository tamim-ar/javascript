const salary = 1000;
const isBCS = true;
const hasExperience = true;
const isCertified = false;

if (salary <= 800) {
    console.log('Your salary is not good enough');
} else {
    let message = 'You have a good salary';
    
    if (isBCS) {
        message += ' and you are a BCS student';
    } else {
        message += ' but you are not a BCS student';
    }
    
    if (hasExperience) {
        message += ', with experience';
    } else {
        message += ', without experience';
    }
    
    if (isCertified) {
        message += ', and with certification.';
    } else {
        message += ', and without certification.';
    }
    
    console.log(message);
}