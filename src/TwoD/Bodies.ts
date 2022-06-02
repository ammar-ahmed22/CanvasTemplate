import Vector2 from "./utils/Vector2.js"
import Rectangle, { RectOpts } from "./Bodies/Rectangle.js"
import Circle, { CircleOpts } from "./Bodies/Circle.js";

class Bodies{
    public Rectangle = (position: Vector2, width: number, height: number, mass: number, options?:RectOpts ) => new Rectangle(position, width, height, mass, options);
    public Circle = (position: Vector2, radius: number, mass:number, options?:CircleOpts ) => new Circle(position, radius, mass, options);
}

export default Bodies