/*
let dim = 4;

for (let row = 0; row < dim; row++){
    for (let col = 0; col < dim; col++){
        //maxVal = Math.max(matrix[row][col], Number.MIN_VALUE);
        console.log(`Row : ${row} Coluna : ${col}`);
        //maxVal = Math.max(matrix[row][2*dim-col-1], maxVal);
        console.log(`Row : ${row} Coluna : ${2*dim-col-1}`);
        //maxVal = Math.max(matrix[(2*dim)-row-1][col],maxVal);
        console.log(`Row : ${(2*dim)-row-1} Coluna : ${col}`);
        //maxVal = Math.max(matrix[(2*dim)-row-1][(2*dim)-col-1],maxVal);
        console.log(`Row : ${(2*dim)-row-1} Coluna : ${(2*dim)-col-1}`);
    }
}
*/

let row1 = [112,42,83,119];
let row2 = [56,125,56,49];
let row3 = [15,78,101,43];
let row4 = [62,98,114,108];

let matrix = [row1, row2, row3, row4];

let NxNSubMatrix = Math.floor(matrix.length / 2);
let maxValOfPosition = 0;
let sumMaxValues = 0;

for (let row = 0; row < NxNSubMatrix; row++){
    for (let col = 0; col < NxNSubMatrix; col++){
        maxValOfPosition = Math.max(matrix[row][2*NxNSubMatrix-col-1], matrix[row][col]);
        maxValOfPosition = Math.max(matrix[(2*NxNSubMatrix)-row-1][col],maxValOfPosition);
        maxValOfPosition = Math.max(matrix[(2*NxNSubMatrix)-row-1][(2*NxNSubMatrix)-col-1],maxValOfPosition);
        sumMaxValues += maxValOfPosition;
    }
}

console.log( sumMaxValues ) ;

