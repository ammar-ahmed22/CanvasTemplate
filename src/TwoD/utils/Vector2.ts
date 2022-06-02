class Vector2{
    // Readonly properties
    readonly magnitude: number;
    //readonly normalized: Vector2;
    readonly sqrMagnitude: number;

    // Static properties
    static down: Vector2 = new Vector2(0, -1)
    static up: Vector2 =  new Vector2(0, 1)
    static left: Vector2 = new Vector2(-1, 0)
    static right: Vector2 =  new Vector2(1, 0)
    static zero: Vector2 = new Vector2(0, 0)

    // Constructor
    constructor(
        public x: number,
        public y: number
    ){
        this.magnitude = this.getMagnitude();
        //this.normalized = this.normalize();
        this.sqrMagnitude = this.getMagnitude({ squared: true })
    }

    // Private methods
    private getMagnitude = (options={ squared: false }): number => {
        if (options.squared){
            return this.x * this.x + this.y * this.y
        }
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    // private normalize = (): Vector2 => {
    //     console.log("HELLO");
    //     if (this.getMagnitude() === 0){
    //         return new Vector2(0, 0)
    //     }
    //     return new Vector2(this.x / this.getMagnitude(), this.y / this.getMagnitude())
    // }

    // Public methods
    public Equals = (vector2: Vector2): boolean => {

        if (this.x === vector2.x && this.y === vector2.y){
            return true
        }

        return false
    }

    public Normalize = (): Vector2 => {
        this.x = this.x / this.getMagnitude();
        this.y = this.y / this.getMagnitude();

        return this;
    }

    public Set = (x: number = null, y: number = null): Vector2 => {
        if (x){
            this.x = x;
        }
        if (y){
            this.y = y;
        }   
        return this;
    }

    public Add = (vector: Vector2): Vector2 => {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }

    public ScalarProd = (scalar: number): Vector2 => {
        this.x *= scalar;
        this.y *= scalar;

        return this;
    }

    public toString = (): string => {
        return `x: ${this.x}, y: ${this.y}`
    }

    // Static methods

    static Add = (a: Vector2, b: Vector2): Vector2 => {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static Subtract = (a: Vector2, b: Vector2): Vector2 => {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    // angular difference between 2 vectors
    static Angle = (a: Vector2, b: Vector2): number => {
        const aToB: number = Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x);
        const bToA: number = Math.atan2(b.y, b.x) - Math.atan2(a.y, b.x);

        return Math.max(aToB, bToA)
    }

    static Distance = (a: Vector2, b: Vector2): number => {
        return Vector2.Subtract(b, a).magnitude
    }

    static Dot = (a: Vector2, b: Vector2): number => {
        return a.x + b.x + a.y + b.y;
    }

}

export default Vector2