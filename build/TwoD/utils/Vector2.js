class Vector2 {
    // Constructor
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // Private methods
        this.getMagnitude = (options = { squared: false }) => {
            if (options.squared) {
                return this.x * this.x + this.y * this.y;
            }
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        // private normalize = (): Vector2 => {
        //     console.log("HELLO");
        //     if (this.getMagnitude() === 0){
        //         return new Vector2(0, 0)
        //     }
        //     return new Vector2(this.x / this.getMagnitude(), this.y / this.getMagnitude())
        // }
        // Public methods
        this.Equals = (vector2) => {
            if (this.x === vector2.x && this.y === vector2.y) {
                return true;
            }
            return false;
        };
        this.Normalize = () => {
            this.x = this.x / this.getMagnitude();
            this.y = this.y / this.getMagnitude();
            return this;
        };
        this.Set = (x = null, y = null) => {
            if (x) {
                this.x = x;
            }
            if (y) {
                this.y = y;
            }
            return this;
        };
        this.Add = (vector) => {
            this.x += vector.x;
            this.y += vector.y;
            return this;
        };
        this.ScalarProd = (scalar) => {
            this.x *= scalar;
            this.y *= scalar;
            return this;
        };
        this.toString = () => {
            return `x: ${this.x}, y: ${this.y}`;
        };
        this.magnitude = this.getMagnitude();
        //this.normalized = this.normalize();
        this.sqrMagnitude = this.getMagnitude({ squared: true });
    }
}
// Static properties
Vector2.down = new Vector2(0, -1);
Vector2.up = new Vector2(0, 1);
Vector2.left = new Vector2(-1, 0);
Vector2.right = new Vector2(1, 0);
Vector2.zero = new Vector2(0, 0);
// Static methods
Vector2.Add = (a, b) => {
    return new Vector2(a.x + b.x, a.y + b.y);
};
Vector2.Subtract = (a, b) => {
    return new Vector2(a.x - b.x, a.y - b.y);
};
// angular difference between 2 vectors
Vector2.Angle = (a, b) => {
    const aToB = Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x);
    const bToA = Math.atan2(b.y, b.x) - Math.atan2(a.y, b.x);
    return Math.max(aToB, bToA);
};
Vector2.Distance = (a, b) => {
    return Vector2.Subtract(b, a).magnitude;
};
Vector2.Dot = (a, b) => {
    return a.x + b.x + a.y + b.y;
};
export default Vector2;
//# sourceMappingURL=Vector2.js.map