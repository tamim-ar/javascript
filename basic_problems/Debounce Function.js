function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();
log(); // Only this one runs after 1 second
