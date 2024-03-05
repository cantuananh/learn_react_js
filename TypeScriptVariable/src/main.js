"use strict";
// let width: number;
// let height: number;
//
//
// width = 10.5;
// height = 20;
//
// let area: number = width * height;
//
// console.log(area);
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./shape/Rectangle");
var rectangle = new Rectangle_1.Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());
