


/*
1
2
112 42 83 119
56 125 56 49
15 78 101 43
62 98 114 108
 */






'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
    let NxNSubMatrix = Math.floor(matrix.length / 2);
    let maxVal = 0;
    let sumMaxVal = 0;
    
    for (let row = 0; row < NxNSubMatrix; row++){
        for (let col = 0; col < NxNSubMatrix; col++){
            maxVal = Math.max(matrix[row][2*NxNSubMatrix-col-1], matrix[row][col]);
            maxVal = Math.max(matrix[(2*NxNSubMatrix)-row-1][col],maxVal);
            maxVal = Math.max(matrix[(2*NxNSubMatrix)-row-1][(2*NxNSubMatrix)-col-1],maxVal);
            sumMaxVal += maxVal;
        }
    }
    return sumMaxVal;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let matrix = Array(2 * n);

        for (let i = 0; i < 2 * n; i++) {
            matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
        }

        const result = flippingMatrix(matrix);

        ws.write(result + '\n');
    }

    ws.end();
}
