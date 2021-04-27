text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , \
scoring 115 goals in 167 appearances."

let words = text.split(' ');
let numbers = [];
 
for (let item of words){
    if(isNaN(item) === false){
        numbers.push(item);
    }
}
console.log(numbers.sort(function(a, b){return a - b}));
