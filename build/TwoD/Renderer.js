class Renderer {
    constructor() {
        this.create = ({ elem, width = 400, height = 400, background = "#000000", stroke = "#ffffff" }) => {
            this.canvas = document.createElement("canvas");
            this.canvas.height = height;
            this.canvas.width = width;
            this.width = width;
            this.height = height;
            this.canvas.style.background = background;
            this.canvas.style.border = "solid 1px";
            this.canvas.style.borderColor = stroke;
            this.ctx = this.canvas.getContext("2d");
            elem.appendChild(this.canvas);
            return this;
        };
        this.setFill = (color) => {
            this.ctx.fillStyle = color;
        };
        this.setStroke = (color) => {
            this.ctx.strokeStyle = color;
        };
        this.clear = () => {
            this.ctx.clearRect(0, 0, this.width, this.height);
        };
        this.rect = (x, y, w, h, options = { fill: false }) => {
            if (options.fill) {
                this.ctx.fillRect(x, y, w, h);
            }
            else {
                this.ctx.strokeRect(x, y, w, h);
            }
        };
        this.circle = (x, y, radius, options = { fill: false }) => {
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
            if (options.fill) {
                this.ctx.fill();
            }
            else {
                this.ctx.stroke();
            }
            this.ctx.closePath();
        };
    }
}
export default Renderer;
//# sourceMappingURL=Renderer.js.map