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




let money = 1000;

const buyPhone = (phone: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 1000) {
                resolve("Can buy phone")
            } else {
                reject("You do not enough money")
            }
        })
    })
}

money = 2000;

const promise = buyPhone("Ihone 15").then(value => {
    console.log(value)
}, error => {
    console.log(error);
})
