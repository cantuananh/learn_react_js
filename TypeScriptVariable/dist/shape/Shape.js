"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    toString() {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}
exports.Shape = Shape;
//# sourceMappingURL=Shape.js.map