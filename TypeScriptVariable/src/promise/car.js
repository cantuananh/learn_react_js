// let money = 10000;
//
// const buyCar = (car: any) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money >= 10000) {
//                 resolve("Can buy " + car);
//             } else {
//                 reject("Do not enough money");
//             }
//         }, 100);
//     })
// }
//
//
// money = 1000001;
//
// const promise = buyCar("Vinfast").then(value => {
//     console.log(value);
// }, error => {
//     console.log(error);
// })
var money = 1000;
var buyPhone = function (phone) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (money > 1000) {
                resolve("Can buy phone");
            }
            else {
                reject("You do not enough money");
            }
        });
    });
};
money = 500;
var promise = buyPhone("Ihone 15").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
