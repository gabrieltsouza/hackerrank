let strParams = "63 54 17 78 43 70 32 97 16 94 74 18 60 61 35 83 13 56 75 52 70 12 24 37 17 0 16 64 34 81 82 24 69 2 30 61 83 37 97 16 70 53 0 61 12 17 97 67 33 30 49 70 11 40 67 94 84 60 35 58 19 81 16 14 68 46 42 81 75 87 13 84 33 34 14 96 7 59 17 98 79 47 71 75 8 27 73 66 64 12 29 35 80 78 80 6 5 24 49 82";
let arrayResponse = [], arrayRquest = [];

arrayRquest = strParams.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

console.log(arrayRquest.toString());
console.log(arrayRquest.length);

for (element of arrayRquest){
    arrayResponse[element] = (arrayResponse[element] ? arrayResponse[element]+1 : 1);
}
for (let count = 0;count<=99; count++){
    arrayResponse[count] = (arrayResponse[count] ? arrayResponse[count] : 0);
}

console.log(arrayResponse.toString());
console.log(arrayResponse.length);

console.log("2 0 1 0 0 1 1 1 1 0 0 1 3 2 2 0 4 4 1 1 0 0 0 0 3 0 0 1 0 1 2 0 1 2 2 3 0 2 0 0 1 0 1 1 0 0 1 1 0 2 0 0 1 1 1 0 1 0 1 1 2 3 0 1 2 0 1 2 1 1 4 1 0 1 1 3 0 0 2 1 2 3 2 2 2 0 0 1 0 0 0 0 0 0 2 0 1 3 1 0");
