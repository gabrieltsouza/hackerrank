'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

const stringAdj = () => {    
    if (typeof inputString === "string")
    {
        inputString = inputString.split('\n');
        main();
    }
}

process.stdin.on('end', stringAdj);

process.on('SIGINT', stringAdj);

function readLine() {
    const response = inputString[currentLine++];
    return response;
}

function plusMinus(arr) {
    const resultPositiveInt = arr.map((n) => !isNaN(n) && n > 0 ? 1 : 0).reduce((r, n) => r + n);
    const resultZeros = arr.map((n) => !isNaN(n) && n === 0 ? 1 : 0).reduce((r, n) => r + n);
    const resultNegativeInt = arr.map((n) => !isNaN(n) && n < 0 ? 1 : 0).reduce((r, n) => r + n);
    const totalOfNumbers = resultPositiveInt + resultNegativeInt + resultZeros;
    console.log((resultPositiveInt / totalOfNumbers).toFixed(6));
    console.log((resultNegativeInt / totalOfNumbers).toFixed(6));
    console.log((resultZeros / totalOfNumbers).toFixed(6));
}

function main() {
    const readLineTemp1 = readLine();
    const readLineTemp2 = readLine();

    if (typeof readLineTemp1 === 'undefined' || typeof readLineTemp2 === 'undefined')
    {
    }
    else
    {
        const n = parseInt(readLineTemp1.trim(), 10);

        const arr = readLineTemp2.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10)).splice(0, n);
        
        plusMinus(arr);

        process.exit(0);
    }
}
