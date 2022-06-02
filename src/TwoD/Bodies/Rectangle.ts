import Renderer from "../Renderer.js";
import Vector2 from "../utils/Vector2.js";
import Body from "./Body.js";

interface RectOpts{
    isStatic?: boolean,
    fill?: string,
    stroke?: string
}

class Rectangle extends Body{
    public width: number;
    public height: number;
    private options: RectOpts = { isStatic: false, fill: null, stroke: "#ffffff"}
    constructor(position: Vector2, width: number, height: number, mass: number, options?: RectOpts){
        //console.log(props);
        super(position, mass);
        this.height = height;
        this.width = width;
        if (options){
            for (let key in options){
                this.options[key] = options[key]
            }
        }
    }

    public draw = (renderer: Renderer ) => {
        // draw the rect
        if (this.options.fill){
            renderer.setFill(this.options.fill)
        }else{
            renderer.setStroke(this.options.stroke)
        }

        renderer.rect(this.position.x, this.position.y, this.width, this.height, { fill: this.options.fill ? true : false })

    }


}

export { RectOpts }
export default Rectangle