'use strict';

function lonelyinteger(a) {
    let numbersThatFailed = []
    let numberChoosen = null;
    
    for (var index1 = 0; index1 < a.length; index1++){
        if (a.findIndex((element, index) => element === a[index1] && !(index1 === index)) === -1) {
            numberChoosen = a[index1];
        }
    }
    return numberChoosen;
}

function main() {
    let a = [1,2,1,4,2];
    const result = lonelyinteger(a);
    console.log("Resultado - " + result);
}

main();