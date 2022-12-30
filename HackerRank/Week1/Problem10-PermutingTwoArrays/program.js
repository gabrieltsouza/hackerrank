
let k = 5;
let A = [1,2,3]; 
let B = [9,8,7];
console.log(main(k, A, B));

k = 10;
A = [7, 6, 8, 4, 2];
B = [5, 2, 6, 3, 1];
console.log(main(k, A, B));


function main(k, A, B){
    return A.some(i => A.filter(n => n === i).length > B.filter(x => x >= k - i).length) ? "NO" : "YES";
}



