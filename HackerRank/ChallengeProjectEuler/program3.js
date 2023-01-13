//var n = 92819281731;
/*var primeNumbers = [2,3,5,7];
var number = 0;
for (var cont = n ; cont > 0 ; cont-- ) {
    number = 0;
    var cond = ( cont === primeNumbers[0] || cont === primeNumbers[1] || cont === primeNumbers[2] || cont === primeNumbers[3] ) ;
    var cond0 = cont%primeNumbers[0]!==0 ;
    var cond1 = cont%primeNumbers[1]!==0 ;
    var cond2 = cont%primeNumbers[2]!==0 ;
    var cond3 = cont%primeNumbers[3]!==0 ;
    if ((cond0 && cond1 && cond2 && cond3) || cond ) {
        number=cont;
        break;
    }
}
console.log(number);
*/

function primeFactors(n)
{
    var biggestOne = 0;
	while (n % 2 == 0)
	{
        biggestOne = 2;
		n = Math.floor(n/2);
	}

	for (let i = 3; i <= Math.sqrt(n); i = i + 2)
	{
		while (n % i == 0)
		{
            biggestOne = i;
			n = Math.floor(n/i);
		}
	}

	// Essa condição significa que o número é primo
	if (n > 2)
        biggestOne = n;
    
    return biggestOne;
}

let n = 4093;
console.log(primeFactors(n));

