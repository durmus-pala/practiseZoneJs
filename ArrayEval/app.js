let operations = ["5 + 6", "2 * 3", "8 / 4", "4 - 5"];
let results = [];

for(let i = 0; i < operations.length; i++){

    results.push(eval(operations[i]));
}
console.log(results);