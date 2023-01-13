
function checkPalindrome(resultPalindrome){
    let strPalindrome = resultPalindrome.toString(),
    lengthHalfPalindrome = Math.floor(strPalindrome.length / 2);
    for (let i = 0; i < lengthHalfPalindrome; i++){
        if (strPalindrome[i] !== strPalindrome[(strPalindrome.length-1)-i]){
            return false;
        }
    }
    return true;
}

function checkIfProductFrom3DigitsNumber (resultPalindrome){
    if ((resultPalindrome / 999 > 999) || (resultPalindrome / 100 < 100)) return false;
    for (let cont = 999; cont > 100; cont--) {
        if (resultPalindrome%cont === 0 && resultPalindrome/cont < 999 && resultPalindrome/cont > 100) {
            console.log((resultPalindrome/cont).toString() + " * " + cont.toString());
            return true;
        }
    }
    return false;
} 

function palindrome(n){
    let resultPalindrome = 0;

    for (resultPalindrome=Math.min(999999,n); resultPalindrome > 101101; resultPalindrome--){
        if (checkPalindrome(resultPalindrome)) if (checkIfProductFrom3DigitsNumber(resultPalindrome)) break;
    }
    console.log(resultPalindrome)
}

palindrome(101110);
palindrome(999999);
