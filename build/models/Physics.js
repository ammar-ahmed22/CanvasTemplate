import Vector2 from "./Vector2.js";
class Physics {
    constructor() {
        this.acceleration = new Vector2(0, 0);
        this.setPosition = (position) => {
            this.position = position;
        };
        this.setVelocity = (velocity) => {
            this.velocity = velocity;
        };
        this.setMass = (mass) => {
            this.mass = mass;
        };
        this.dampVelocity = (damping) => {
            if (damping.x !== 0 && damping.y !== 0) {
                this.velocity.x *= damping.x;
                this.velocity.y *= damping.y;
            }
            else if (damping.x === 0) {
                this.velocity.y *= damping.y;
            }
            else if (damping.y === 0) {
                this.velocity.x *= damping.x;
            }
        };
        this.addForce = (force) => {
            const acc = force.divide(this.mass);
            this.velocity.add(acc);
        };
        this.calculatePosition = () => {
            this.position.add(this.velocity);
            return this.position;
        };
    }
}
export default Physics;
//# sourceMappingURL=Physics.js.map