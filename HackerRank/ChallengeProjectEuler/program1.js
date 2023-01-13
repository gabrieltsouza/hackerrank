
function sum( n )
{
    var S1, S2, S3; 
    var newN = n-1;
    var numBy3 = BigInt(Math.floor(newN/3));
    var numBy5 = BigInt(Math.floor(newN/5));
    var numBy15 = BigInt(Math.floor(newN/15));
    var x = BigInt(1);
    var y = BigInt(2);

    S1 = ((x+numBy3)*numBy3)/y*BigInt(3);
    S2 = ((x+numBy5)*numBy5)/y*BigInt(5);
    S3 = ((x+numBy15)*numBy15)/y*BigInt(15);

    //console.log(S1);
    //console.log(S2);
    //console.log(S3);

    return (S1 + S2 - S3).toString();
}
 
console.log( sum( 104857200123    ) ) ;
