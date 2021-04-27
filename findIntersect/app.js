list1 = [11, 4, 5, 9, 7];
list2 = [5, 10, 4, 1, 10];
list3 = [7, 3, 9, 5, 1];

const intersect = list1.filter(x => list2.includes(x) && list3.includes(x));
console.log(intersect);