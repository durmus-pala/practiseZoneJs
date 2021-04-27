let exampleList =  [10, 15, 3, 7];
let k = 17;
let results = [];

for(let item of exampleList){
    results.push(exampleList.includes(k - item));
}
console.log(results.includes(true));