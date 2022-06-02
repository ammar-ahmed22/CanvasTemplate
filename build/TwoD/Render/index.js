class Renderer {
    constructor() {
        this.create = ({ elem, width = 400, height = 400, background = "#000000", stroke = "#ffffff" }) => {
            this.canvas = document.createElement("canvas");
            this.canvas.height = height;
            this.canvas.width = width;
            this.canvas.style.background = background;
            this.canvas.style.border = "solid 1px";
            this.canvas.style.borderColor = stroke;
            this.ctx = this.canvas.getContext("2d");
            elem.appendChild(this.canvas);
            return this;
        };
        this.run = (engine) => {
            requestAnimationFrame(this.run);
        };
    }
}
export default Renderer;
//# sourceMappingURL=index.js.map