import Vector2 from "./Vector2.js";
import Physics from "./Physics.js";
class CannonBall {
    constructor(angle, position, canvasSize, draw) {
        this.angle = angle;
        this.position = position;
        this.canvasSize = canvasSize;
        this.draw = draw;
        this.radius = 15;
        this.physics = new Physics();
        this.gravity = 1.5;
        this.elasticity = 0.75;
        this.friction = 0.05;
        this.handleWallCollision = () => {
            const wall = new Vector2(20, this.canvasSize.y - 20);
            const posBallWall = this.position.offset(this.radius, this.radius);
            const negBallWall = this.position.offset(-this.radius, -this.radius);
            // Ball hits right side
            if (posBallWall.x > wall.y) {
                this.position.x = wall.y - this.radius;
                this.velocity.x *= -1;
                this.physics.dampVelocity(new Vector2(0, this.elasticity));
                // Ball hits bottom
            }
            else if (posBallWall.y > wall.y) {
                this.position.y = wall.y - this.radius;
                this.velocity.y *= -1;
                this.physics.dampVelocity(new Vector2(0, this.elasticity));
                // Ball hits left side
            }
            else if (negBallWall.x < wall.x) {
                this.position.x = wall.x + this.radius;
                this.velocity.x *= -1;
                this.physics.dampVelocity(new Vector2(0, this.elasticity));
                // Ball hits top
            }
            else if (negBallWall.y < wall.x) {
                this.position.y = wall.x + this.radius;
                this.velocity.y *= -1;
                this.physics.dampVelocity(new Vector2(0, this.elasticity));
            }
        };
        this.update = () => {
            // Physics
            // Gravity
            if (this.position.y + (this.gravity / this.mass) < 580) {
                this.physics.addForce(new Vector2(0, this.gravity));
            }
            // Friction (air resistance, ground friction etc) --> all simplified into one
            this.physics.addForce(new Vector2(-(this.velocity.x * this.friction), -(this.velocity.y * this.friction)));
            this.physics.calculatePosition();
            // Wall Collision
            this.handleWallCollision();
            this.draw.setFill("#000000");
            this.draw.circle(this.position, this.radius);
        };
        this.mass = this.radius;
        this.velocity = new Vector2(Math.cos(angle) * 7, Math.sin(angle) * 7);
        this.physics.setPosition(this.position);
        this.physics.setVelocity(this.velocity);
        this.physics.setMass(this.mass);
    }
}
export default CannonBall;
//# sourceMappingURL=CannonBall.js.map