const start = 0;
const end = 1000;
let sum = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 1) {
        console.log("Found");
        sum += i;
    }
}
if (sum * 5 >= 5000) {
    console.log("Bigger");
} else {
    console.log("Smaller or equal");
}