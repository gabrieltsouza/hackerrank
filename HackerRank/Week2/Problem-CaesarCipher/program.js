
function caesarCipher(s, k) {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    upperCase = upperCase.repeat(6);
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    lowerCase = lowerCase.repeat(6);
    let word2response = "";
    for (let pos = 0; pos < s.length; pos++){
        let charPos = upperCase.indexOf(s[pos]);
        if (charPos > -1) 
        {
            word2response = word2response + upperCase[charPos+k];
        }
        else {
            let charPos = lowerCase.indexOf(s[pos]);
            if (charPos > -1) 
            {
                word2response = word2response + lowerCase[charPos+k];
            }
            else {
                word2response = word2response + s[pos];
            }
        }
    }
    return word2response;
}




let result = caesarCipher("middle-Outz", 2);
console.log("middle-Outz");
console.log(result);
console.log("okffng-Qwvb");


result = caesarCipher("There's-a-starman-waiting-in-the-sky", 3);
console.log("There's-a-starman-waiting-in-the-sky");
console.log(result);
console.log("Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb");

result = caesarCipher("There's-a-starman-waiting-in-the-sky", 50);
console.log("There's-a-starman-waiting-in-the-sky");
console.log(result);
console.log("Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb");
