/**
 * Created by natalie on 7/22/2015.
 */
function isPrime(num){
    if (num === 2){
        return true;
    }
    else{
        for (var i = 2; i < num; i++){
            if (num%i === 0){
                return false;
            }
        }
    }
    return true;
}

function generatePrimes(num){
    var count = 0;
    var i = 0;
    var primes = [];
    while(primes.length < num){
        if(isPrime(i)){
            primes.push(i);
        }
        i++;
    }
}

function isNum(num){
    if(typeof num !== 'number'){
        return false;
    }
    return true;
}

self.addEventListener('message', function (event) {
    var n = event.data;

    if (!isNum(n)){
        throw new Error('User Type Error');
    }

    var arr = generatePrimes(n);
    self.postMessage(n);
});