


function birthday(s, d, m) {
    let count = 0;
    let candyCount = 0;
    for (let i = 0; i + m <= s.length; i++){
        for(let j = 0; j < m; j++){
            count += s[i+j];
        }
        if(count == d){
            candyCount++;
        }
        count = 0;
    }
    return candyCount;
}


let s = [2,2,1,3,2];
let d = 4, m = 2;

console.log("Result : " + birthday(s, d, m));

