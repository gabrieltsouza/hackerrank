
let s = "We promptly judged antique ivory buckles for the prize";
//console.log((s.match(new RegExp(/[^a-z,A-Z, ]+/g)) ? "not pangram" : "pangram"));
console.log((verifyPangram(s) ? "not pangram" : "pangram"))


s = "We promptly judged antique ivory buckles for the next prize";
//console.log((s.match(new RegExp(/[^a-z,A-Z, ]+/g)) ? "not pangram" : "pangram"));
console.log((verifyPangram(s) ? "not pangram" : "pangram"))


function verifyPangram (s){
    s = s.toLowerCase();
    let chars = 'abcdefghijklmnopqrstuvxyzw '; 
    for (let count = 0; count < chars.length-1; count++){
        if (!s.includes(chars[count])){
            return false
        }
    }    
    return true;    
}
