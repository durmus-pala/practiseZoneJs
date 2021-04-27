let example = [1, 2, 3, 4, 5];
let results = [];

example.forEach((item) => {
    results.push(eval(example.filter(number => number != item).join('*')));
});
console.log(results);