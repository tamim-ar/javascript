let value = input.split(' ').map(Number);
  
let value1 = [];
for (let i = 0; i < value.length; i++) {
    let value2 = false;
    
    for (let j = 0; j < value1.length; j++) {
        if (value[i] === value1[j]) {
            value2 = true;
            break;
        }
    }

    if (!value2) {
        value1.push(value[i]);
    }
}
let len = value1.length;
for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
        if (value1[j] > value1[j + 1]) {
            let temp = value1[j];
            value1[j] = value1[j + 1];
            value1[j + 1] = temp;
        }
    }
}
console.log(value1.join(' '));