


function main(input) {
    let newStr = "";
    for (var count = 0; count < input.split("\n")[0].length; count++) { newStr += (parseInt(input.split("\n")[0][count],2) ^ parseInt(input.split("\n")[1][count])).toString(2); }; 
    return newStr;
}


let input = "10101\n00101"

//console.log(main(str));

//process.stdout.write((() => {for (var count = 0; count < input.split("\n")[0].length; count++) { newStr += (parseInt(input.split("\n")[0][count],2) ^ parseInt(input.split("\n")[1][count])).toString(2); }; }));

//process.stdout.write({for (var count = 0; count < input.split("\n")[0].length; count++) { newStr += (parseInt(input.split("\n")[0][count],2) ^ parseInt(input.split("\n")[1][count])).toString(2); }; });

//x = String.fromCharCode(y.charCodeAt(0) ^ z.charCodeAt(0));


process.stdout.write((parseInt(input.split("\n")[0], 2) ^ parseInt(input.split("\n")[1], 2)).toString(2));