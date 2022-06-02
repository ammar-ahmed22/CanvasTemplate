import Renderer from "../Renderer.js";
import Vector2 from "../utils/Vector2.js";



abstract class Body{
    public velocity: Vector2 = new Vector2(0, 0);
    public acceleration: Vector2 = new Vector2(0, 0);
    constructor(
        public position: Vector2,
        public mass: number
    ){}

    setVelocity = (v: Vector2): void => {
        this.velocity = v;
    }

    addForce = (force: Vector2): void => {

    }

    update = (dt: number) => {
        this.position.Add(new Vector2(100, 0).ScalarProd(dt / 1000))
    }

    abstract draw(renderer: Renderer): void
    
}


export default Body