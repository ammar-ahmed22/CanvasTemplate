class Vector2{
    constructor(
        public x: number = 0,
        public y: number = 0
    ){

    }

    // Calculates magnitude of vector
    magnitude = () : number => {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    // Calculates resultant angle of vector
    angle = (): number => {
        return Math.atan2(this.y, this.x)
    }

    // Adds vector to self
    add = (vector2: Vector2): Vector2 => {
        this.x += vector2.x;
        this.y += vector2.y;

        return this;
    }

    // Divides vector by constant
    divide = (val: number): Vector2 => {
        this.x /= val;
        this.y /= val;

        return this;
    }

    // Multiplies vector by vector

    

    offset = (x: number, y: number): Vector2 => {
        return new Vector2(this.x + x, this.y + y)
    }


}

export default Vector2