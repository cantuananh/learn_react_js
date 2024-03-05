// let sum = function(a: number, b: number): number {
//     console.log(a + b);
    
//     return a + b;
// }

// function show(name?: string) : string {

//     let message = 'Hello';

//     if(name){

//          message += ' ' + name;

//     }

//     return message;

// }
// console.log(show('CodeGym'));
// console.log(show());


// let sumTwoNumber = (a: number, b: number): number => a+ b;

// console.log(sumTwoNumber(5,5));

// let hello = () => console.log('CodeGym');


function handleTimeout(timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, timeout);
    });
}

var xxx = handleTimeout(5000);
xxx.then(function () {
    console.log('LẬP');
})
.then(function () {
    return handleTimeout(3000);
})
.then(function () {
    console.log('TRÌNH')
})
.then(function () {
    return handleTimeout(1000);
})
.then(function () {
    console.log('CODEGYM');
});
