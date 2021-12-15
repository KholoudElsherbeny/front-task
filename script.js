// task 4
const arr = [true, false, false, true, false];
const count = arr.filter(Boolean).length;

console.log(count);

//task 5
function makePlusFunction(number) {
    return 5 + number;
}
const plusFive = makePlusFunction(-8)
console.log(plusFive);

// task 6
const array = [["shrimp", 15], ["tools", 12]];
var obj = [];
array.forEach(function (data) {
    obj[data[0]] = data[1]
});
console.log(obj); 