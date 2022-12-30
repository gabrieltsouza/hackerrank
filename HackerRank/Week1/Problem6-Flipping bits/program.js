
function flippingBits(n) {

    let numberBase2 = (n >>> 0).toString(2); 
    let fix = 32-numberBase2.length;
    let numberStr = ("0".repeat(fix).concat(numberBase2));

    let newStr = "";
    for (var count = 0; count < 32; count++) {
        let strConverted = (numberStr[count] === "0" ? "1" : "0");
        newStr = newStr.concat(strConverted.toString());
    }

    let newNumber = parseInt(newStr, 2).toString(10)

    return newNumber;
}


console.log(flippingBits(2147483647));
console.log(flippingBits(1));
console.log(flippingBits(0));
