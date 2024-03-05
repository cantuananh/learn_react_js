function fibonacciSequence(maximum) {
    var arrayFibonacci = [0, 1];
    var nextNumber = 1;
    while (nextNumber < maximum) {
        arrayFibonacci.push(nextNumber);
        nextNumber = arrayFibonacci[arrayFibonacci.length - 1] + arrayFibonacci[arrayFibonacci.length - 2];
    }
    return arrayFibonacci;
}
var fibonacciArrayTo100 = fibonacciSequence(1000);
var sumArray = fibonacciArrayTo100.reduce(function (a, b) { return a + b; }, 0);
console.log(sumArray);
