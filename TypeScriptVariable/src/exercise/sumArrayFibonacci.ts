function fibonacciSequence(maximum: number): number[] {
    let arrayFibonacci: number[] = [0, 1];

    let nextNumber = 1;

    while (nextNumber <  maximum) {
        arrayFibonacci.push(nextNumber);

        nextNumber = arrayFibonacci[arrayFibonacci.length - 1] + arrayFibonacci[arrayFibonacci.length - 2];
    }
    
    return arrayFibonacci;
}


let fibonacciArrayTo100: number[] = fibonacciSequence(1000);

let sumArray = fibonacciArrayTo100.reduce((a, b) => a + b, 0);
console.log(sumArray)