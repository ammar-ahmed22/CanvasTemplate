import Vector2 from "./Vector2.js"

class Physics{
    position: Vector2;
    velocity: Vector2;
    acceleration: Vector2 = new Vector2(0, 0);
    mass: number;

    setPosition = (position: Vector2): void => {
        this.position = position;
    }

    setVelocity = (velocity: Vector2): void => {
        this.velocity = velocity;
    }

    setMass = (mass: number): void =>{
        this.mass = mass;
    }

    dampVelocity = (damping: Vector2) => {
        if (damping.x !== 0 && damping.y !== 0){
            this.velocity.x *= damping.x;
            this.velocity.y *= damping.y;
        }else if (damping.x === 0){
            this.velocity.y *= damping.y;
        }else if (damping.y === 0){
            this.velocity.x *= damping.x;
        }
    }

    addForce = (force: Vector2): void => {
        const acc = force.divide(this.mass);

        this.velocity.add(acc)
    }

    calculatePosition = (): Vector2 => {
        this.position.add(this.velocity);

        return this.position;
    }
}

export default Physics