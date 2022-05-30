import Vector2 from "./Vector2.js";

class Physics{
    constructor(position, mass=1){
        this.position = position;
        this.mass = 1
        this.force = new Vector2(0, 0)
        this.velocity = new Vector2(0, 0)
    }

    addForce = (force) => {
        this.force.add(force)
    }

    updateVelocity = () => {
        this.velocity.add(this.force)
    }

    updatePosition = () => {
        this.position.add(this.velocity)
    }

    update = () => {
        
        this.updateVelocity()
        this.updatePosition()

        this.force.x = 0;
        this.force.y = 0;
    }
}

export default Physics