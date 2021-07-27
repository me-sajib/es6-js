function fullName(firstName, secondName){
    return firstName + secondName;
}
const result = fullName('sajib ', 'sarker')
console.log(result);

function numbers(num1, num2 = 1) {
    return num1 + num2;
}
const result2 = numbers(32)
console.log(result2);