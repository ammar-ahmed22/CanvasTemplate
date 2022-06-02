import Body from "./Body.js";
class Circle extends Body {
    constructor(position, radius, mass, options) {
        //console.log(props);
        super(position, mass);
        this.options = { isStatic: false, fill: null, stroke: "#ffffff" };
        this.draw = (renderer) => {
            // draw the circ
            if (this.options.fill) {
                renderer.setFill(this.options.fill);
            }
            else {
                renderer.setStroke(this.options.stroke);
            }
            renderer.circle(this.position.x, this.position.y, this.radius, { fill: this.options.fill ? true : false });
        };
        this.radius = radius;
        if (options) {
            for (let key in options) {
                this.options[key] = options[key];
            }
        }
    }
}
export default Circle;
//# sourceMappingURL=Circle.js.map