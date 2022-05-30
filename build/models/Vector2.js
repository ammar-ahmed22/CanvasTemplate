class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        // Calculates magnitude of vector
        this.magnitude = () => {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        // Calculates resultant angle of vector
        this.angle = () => {
            return Math.atan2(this.y, this.x);
        };
        // Adds vector to self
        this.add = (vector2) => {
            this.x += vector2.x;
            this.y += vector2.y;
            return this;
        };
        // Divides vector by constant
        this.divide = (val) => {
            this.x /= val;
            this.y /= val;
            return this;
        };
        // Returns new vector as the difference between self and given
        this.difference = (vector2) => {
            return new Vector2(this.x - vector2.x, this.y - vector2.y);
        };
        // Multiplies vector by -1
        this.invert = () => {
            this.x = -this.x;
            this.y = -this.y;
            return this;
        };
        this.offset = (x, y) => {
            return new Vector2(this.x + x, this.y + y);
        };
    }
}
export default Vector2;
//# sourceMappingURL=Vector2.js.map