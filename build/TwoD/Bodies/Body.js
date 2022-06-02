import Vector2 from "../utils/Vector2.js";
class Body {
    constructor(position, mass) {
        this.position = position;
        this.mass = mass;
        this.velocity = new Vector2(0, 0);
        this.acceleration = new Vector2(0, 0);
        this.setVelocity = (v) => {
            this.velocity = v;
        };
        this.addForce = (force) => {
        };
        this.update = (dt) => {
            this.position.Add(new Vector2(100, 0).ScalarProd(dt / 1000));
        };
    }
}
export default Body;
//# sourceMappingURL=Body.js.map