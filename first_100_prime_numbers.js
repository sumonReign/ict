function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++){
         if (num % i == 0) return false
    }
    return true
}

function printPrime(limit) {
    for(let num = 0; num<= limit; num++){
        if(isPrime(num)) console.log(num)
    }
}

let limit = 100;
printPrime(limit);
