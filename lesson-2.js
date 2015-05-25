var nums = process.argv.slice(2);
var sum = nums.reduce(function (prev, curr) {return +(curr)+prev;}, 0);
console.log(sum)
