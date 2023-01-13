
let n = 100;
let number1 = 0n,
    number2 = 1n,
    sum = 0n;

while (number1 < n) {
    if (number1 % 2n === 0n) sum += number1;
    
    let temp = number1 + number2;
    [number1, number2] = [number2, temp];        
}

console.log(sum.toString());
