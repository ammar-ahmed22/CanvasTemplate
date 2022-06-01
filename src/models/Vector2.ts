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

    // Returns new vector as the difference between self and given
    difference = (vector2: Vector2): Vector2 => {
        return new Vector2(this.x - vector2.x, this.y - vector2.y)
    }

    // Returns new vector divided by constant
    division = (val: number) => {
        return new Vector2(this.x / val, this.y / val)
    }

    // Returns normalized vector
    normalized = (): Vector2 => {
        return new Vector2(this.x / this.magnitude(), this.y / this.magnitude());
    }

    // Returns the dot product 
    dot = (vector2: Vector2): number => {
        return (this.x * vector2.x) + (this.y * vector2.y);
    }

    // Returns new inverted vector
    invert = (): Vector2 => {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    // Returns new vector copy
    copy = (): Vector2 => {
        return new Vector2(this.x, this.y);
    }

    

    offset = (x: number, y: number): Vector2 => {
        return new Vector2(this.x + x, this.y + y)
    }


}

export default Vector2