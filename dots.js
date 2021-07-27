const number1 = [11, 34, 32, 12, 43, 434];
const number2 = [32, 43,34, 23, 3423, 43, 32];
const number3 = [22,34,543];
const allNum = number1.concat(65).concat(number2)
// console.log(allNum);
const allNums = [...number1, ...number2, 555, ...number3]
console.log(allNums);

const business = 434;
const montri = 354;
const sochib = 444;
// const max = Math.max(business, montri, sochib);
const friends = [43,43,23,23,34,432,323];
const max = Math.max(...friends)
console.log(max);