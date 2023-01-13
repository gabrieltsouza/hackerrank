function isPalindrome(resultPalindrome){
    let strPalindrome = resultPalindrome.toString(),
    lengthHalfPalindrome = Math.floor(strPalindrome.length / 2);
    for (let i = 0; i < lengthHalfPalindrome; i++){
        if (strPalindrome[i] !== strPalindrome[(strPalindrome.length-1)-i]){
            return false;
        }
    }
    return true;
}


function solve(n)
{
    ans = -1;
    for (let i = 999; i > 99; --i)
    {
        for (let j = 999; j > 99; --j)
        {
            let x = i * j;
            if ( x < n && x % 11 === 0 )
            {
                if (isPalindrome(x))
                {
                 ans = Math.max(ans, x);
                }
            }
        }
    }
    console.log(ans)
}


solve(101110);
solve(999999);
