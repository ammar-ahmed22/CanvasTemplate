class Draw {
    constructor(canvas) {
        this.canvas = canvas;
        this.transformOrigin = () => {
            this.ctx.translate(0, this.canvas.height);
            this.ctx.scale(1, -1);
        };
        this.setFill = (color) => {
            this.ctx.fillStyle = color;
        };
        this.setStroke = (color) => {
            this.ctx.strokeStyle = color;
        };
        this.rect = (position, size, options = { stroke: false, clear: false }) => {
            if (options.stroke) {
                this.ctx.strokeRect(position.x, position.y, size.x, size.y);
            }
            else if (options.clear) {
                this.ctx.clearRect(position.x, position.y, size.x, size.y);
            }
            else {
                this.ctx.fillRect(position.x, position.y, size.x, size.y);
            }
        };
        this.circle = (position, radius) => {
            const { ctx } = this;
            ctx.beginPath();
            ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();
        };
        this.ctx = this.canvas.getContext("2d");
    }
}
export default Draw;
//# sourceMappingURL=Draw.js.map