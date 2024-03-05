let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];

for (let i = 0; i < array.length; i++) {
    if (isPrime((array[i]))) console.log(array[i]);
}

function isPrime(number: number): boolean {
    if(number < 2) return false;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false
    }

    return true;
}
