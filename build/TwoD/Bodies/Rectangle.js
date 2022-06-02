import Body from "./Body.js";
class Rectangle extends Body {
    constructor(position, width, height, mass, options) {
        //console.log(props);
        super(position, mass);
        this.options = { isStatic: false, fill: null, stroke: "#ffffff" };
        this.draw = (renderer) => {
            // draw the rect
            if (this.options.fill) {
                renderer.setFill(this.options.fill);
            }
            else {
                renderer.setStroke(this.options.stroke);
            }
            renderer.rect(this.position.x, this.position.y, this.width, this.height, { fill: this.options.fill ? true : false });
        };
        this.height = height;
        this.width = width;
        if (options) {
            for (let key in options) {
                this.options[key] = options[key];
            }
        }
    }
}
export default Rectangle;
//# sourceMappingURL=Rectangle.js.map