

function maxMin(k, arr) {
    let result = Number.MAX_VALUE;
    let arrSorted = arr.sort((a,b) => {return a-b});
    for (let cont = 0; cont <= arrSorted.length - k ; cont++) {
        //let arraySlice = arrSorted.slice(cont, cont+k);
        //let partialResult = arraySlice[(cont+k)-1] - arraySlice[cont]
        let partialResult = arrSorted[(cont+k)-1] - arrSorted[cont]
        result = (partialResult < result ? partialResult : result);
    }
    return result;

}

console.log(maxMin(3, [10,100,300,200,1000,20,30]));

console.log(maxMin(3, [10,100,300,200,1000,1001,1002,20,30]));

