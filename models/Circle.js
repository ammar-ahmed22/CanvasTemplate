import Physics from "./Physics.js";

class Circle {
    constructor(draw, position, radius, color="#ffffff"){
        this.draw = draw;
        this.position = position;
        this.radius = radius;
        this.color = color;
        this.physics = new Physics(this.position)
    }

    addForce = (force) => {
        this.physics.addForce(force)
    }

    

    update = () => {
        this.draw.setFill(this.color)
        this.physics.update()
        this.draw.circle(this.position, this.radius)

    }
}

export default Circle