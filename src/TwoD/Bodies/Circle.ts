import Renderer from "../Renderer.js";
import Vector2 from "../utils/Vector2.js";
import Body from "./Body.js";

interface CircleOpts{
    isStatic?: boolean,
    fill?: string,
    stroke?: string
}

class Circle extends Body{
    public radius: number;
    private options: CircleOpts = { isStatic: false, fill: null, stroke: "#ffffff"}
    constructor(position: Vector2, radius: number, mass: number, options?: CircleOpts){
        //console.log(props);
        super(position, mass)
        this.radius = radius;
        if (options){
            for (let key in options){
                this.options[key] = options[key]
            }
        }
    }

    public draw = (renderer: Renderer ) => {
        // draw the circ
        if (this.options.fill){
            renderer.setFill(this.options.fill)
        }else{
            renderer.setStroke(this.options.stroke)
        }
        renderer.circle(this.position.x, this.position.y, this.radius, { fill: this.options.fill ? true : false })
    }


}

export { CircleOpts }
export default Circle