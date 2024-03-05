export class Shape {
    private _x: number;
    private _y: number;


    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public toString(): string {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}