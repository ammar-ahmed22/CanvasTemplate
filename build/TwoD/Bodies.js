import Rectangle from "./Bodies/Rectangle.js";
import Circle from "./Bodies/Circle.js";
class Bodies {
    constructor() {
        this.Rectangle = (position, width, height, mass, options) => new Rectangle(position, width, height, mass, options);
        this.Circle = (position, radius, mass, options) => new Circle(position, radius, mass, options);
    }
}
export default Bodies;
//# sourceMappingURL=Bodies.js.map