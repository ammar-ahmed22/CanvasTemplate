class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.add = (vector2) => {
            this.x += vector2.x;
            this.y += vector2.y;
        };
        this.offset = (x, y) => {
            return new Vector2(this.x + x, this.y + y);
        };
    }
}
export default Vector2;
//# sourceMappingURL=Vector2.js.map