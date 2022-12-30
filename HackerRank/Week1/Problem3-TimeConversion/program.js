'use strict';

const fs = require('fs');
const CODE_PATTERN = /^([0-9]{2}:[0-9]{2}:[0-9]{2}[AP]{1}[M]{1})$/;

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}





function timeConversion(s) {
    const isValidCode = validateCode(s);
    var dateE = "";
    if (isValidCode) 
    {
        var dateH = s.slice(0,2);
        //var datex = s.slice(3,5);
        //var datex = s.slice(6,8);
        var dateH2 = (s.slice(8, 10) === "PM" && parseInt(dateH) < 12 ? parseInt(dateH)+12 : dateH);
        var dateH2 = (s.slice(8, 10) === "AM" && parseInt(dateH) === 12 ? "00" : dateH2);
        dateE = dateH2 + ":" + s.slice(3,5) + ":" + s.slice(6,8);
        //console.log(dateE);
    }
    return dateE;
}

const validateCode = function(code) {
    return CODE_PATTERN.test(code);
  };
  