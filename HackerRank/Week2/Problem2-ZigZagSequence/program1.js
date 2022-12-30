
let inputStr = `3
12
1 2 3 4 5 6 7 8 9 10 11 12
7
1 2 3 4 5 6 7
4
1 2 3 4`

inputArr = inputStr.split(`\n`);

for (let testCases = 1; testCases <= inputArr[0];testCases++){
    let arrValidation = inputArr[testCases*2].split(' ');
    arrValidation.sort((a,b)=>{a-b});
    let half = Math.floor(arrValidation.length/2);
    let quarter = Math.round(arrValidation.length/4);
    for (let cont=0;cont<quarter;cont++){
        let n1 = arrValidation[cont+half];
        let n2 = arrValidation[arrValidation.length-cont-1];
        arrValidation[cont+half] = n2;
        arrValidation[arrValidation.length-cont-1]=n1;
    }
    console.log(arrValidation.toString().replace(new RegExp(",", "g"), " "));
}
