function diagonalDifference(arr) {
    let records = arr.length-1;

    let dr = 0;
    let dl = 0;

    for (var y = 0; y<arr.length;y++){
        dl = dl + parseInt(arr[y][y]);
    }

    let control = arr.length-1;
    for (var y = 0; y<arr.length;y++){
        dr = dr + parseInt(arr[control][y]);
        control--;
    }

    return Math.abs(dl-dr);

}



let arrX = [9];



arrX[0] = [6  , 6 , 7  , -10, 9 , -3, 8  , 9 , -1];
arrX[1] = [9  ,7  , -10, 6  , 4 , 1 , 6  , 1 , 1];
arrX[2] = [-1 , -2, 4  , -6 ,1  ,-4 , -6 , 3 ,9];
arrX[3] = [-8 , 7 , 6  , -1 , -6, -6, 6  , -7, 2];
arrX[4] = [-10, -4, 9  , 1  , -7, 8 , -5 , 3 , -5];
arrX[5] = [-8 , -3, -4 , 2  ,-3 , 7 , -5 , 1 , -5];
arrX[6] = [-2 , -7, -4 , 8  , 3 , -1, 8  , 2 , 3];
arrX[7] = [-3 , 4 , 6  , -7 ,-7 , -8, -3 , 9 , -6];
arrX[8] = [-2 , 0 , 5  , 4  , 4 , 4 , -3 , 3 , 0];
console.log(diagonalDifference(arrX));
