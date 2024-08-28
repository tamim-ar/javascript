const isRaining = false;
const hasUmbrella = true;

if (!isRaining) {
    console.log("It's not raining, you don't need an umbrella.");
} else if (isRaining && !hasUmbrella) {
    console.log("It's raining and you don't have an umbrella.");
} else {
    console.log("It's raining and you have an umbrella.");
}

const isWeekend = false;

if (!isWeekend) {
    console.log("It's a weekday, time to work.");
} else {
    console.log("It's the weekend, time to relax.");
}