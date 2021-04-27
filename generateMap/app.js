const scores = new Map();


for(let i = 1; i < 6; i++){
    const objects = {};
    for(let j = 1; j < 6; j++){
        objects[`lesson ${j}`] = Math.trunc(Math.random() * (100 - 35 + 1) + 35);
    }
    scores.set(`Student - ${i}`, objects)
}
console.log(Object.fromEntries(scores));