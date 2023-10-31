function avg(numbers) {
    //let s=numbers.reduce((prev, curr)=>prev+curr,0);
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}


function fact(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}

function prime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

module.exports = { avg, prime, fact }

/*
exports.avg=avg;
exports.prime=prime;
exports.fact=fact; */
