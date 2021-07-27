function names() {
    return "sajib"
}
const result = names();
console.log(result);

const users = function(num, num2) {
    return num + num2;
}
const result2 = users(32,3);
console.log(result2);
// no peramiter
const simpleResult = () => 9;
const result6 = simpleResult();
console.log(result6);
// single line arrow function
const character = fName => fName + " good";
const result3 = character('sajib');
console.log(result3);

// more then 1 peramitar
const number = (num1, num2) => num1 * num2;
const result4 =number(4,2);
console.log(result4);

// more then logic 
const doMath = (number1, number2) => {
    const sum = number1 + number2;
    const diff = number1 - number2;
    const result = sum * 2;
    return result;
}
const result5 = doMath(10, 5);
console.log(result5);