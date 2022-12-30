

function dynamicArray(n, queries) {
    let query = [];

    let arr = [];
    arr[0] = []
    arr[1] = [];

    let answerArray = [];
    let lastAnswer = 0;
    
    let idx = 0;
    let x = 0;
    let y = 0;
    
    for (let pos = 0; pos < queries.length; pos++){
        x = queries[pos][1];
        y = queries[pos][2];
        idx = ((x^lastAnswer)%n);

        if (queries[pos][0] === 1){
            arr[idx].push(queries[pos][2]);
        } else {
            //lastAnswer = queries[idx][y%arr[idx].length];
            lastAnswer = arr[idx][y%arr[idx].length];
            answerArray.push(lastAnswer);
        }
    }
    return answerArray;
/*
        let lastAnswer = 0;
        let arr = [];
        console.log(arr);
        let arrAnswer = [];
        for (let i = 0; i < queries.length; i++) {
            let query = queries[i];
            if (query[0] == 1) {
                let idx = (query[1] ^ lastAnswer) % n;
                if (!arr[idx]) arr[idx] = [];
                arr[idx].push(query[2]);
            } else {
                let idx = (query[1] ^ lastAnswer) % n;
                lastAnswer = arr[idx][query[2] % arr[idx].length];
                arrAnswer.push(lastAnswer);
            }
        }
        return arrAnswer;
*/
}








let arr = [];
arr.push([1, 0, 5]);
arr.push([1, 1, 7]);
arr.push([1, 0, 3]);
arr.push([2, 1, 0]);
arr.push([2, 1, 1]);

console.log(dynamicArray(2, arr));
