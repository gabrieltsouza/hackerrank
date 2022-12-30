
function towerBreakers(n, m) {
    if ((n===1 && m===1) || m===1) {return 2};

    if (n%2 > 0) {return 1};

    return 2;
}


console.log(towerBreakers(1, 2));
console.log(towerBreakers(1, 4));
