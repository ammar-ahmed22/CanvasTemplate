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
        this.otherBalls = [];
        this.addOtherBall = (ball) => {
            this.otherBalls.push(ball);
        };
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
            if (posBallWall.y > wall.y) {
                this.position.y = wall.y - this.radius;
                this.velocity.y *= -1;
                this.physics.dampVelocity(new Vector2(0, this.elasticity));
                // Ball hits left side
            }
            if (negBallWall.x < wall.x) {
                this.position.x = wall.x + this.radius;
                this.velocity.x *= -1;
                this.physics.dampVelocity(new Vector2(0, this.elasticity));
                // Ball hits top
            }
            if (negBallWall.y < wall.x) {
                this.position.y = wall.x + this.radius;
                this.velocity.y *= -1;
                this.physics.dampVelocity(new Vector2(0, this.elasticity));
            }
        };
        this.checkForCollision = (ball1, ball2) => {
            const r1 = ball1.radius;
            const r2 = ball2.radius;
            const minSeparation = r1 + r2;
            const distance = ball1.position.difference(ball2.position).magnitude();
            if (distance > minSeparation) {
                // good to go
                return false;
            }
            else {
                return true;
            }
        };
        this.handleBallCollision = () => {
            this.otherBalls.forEach((other) => {
                const hasCollided = this.checkForCollision(this, other);
                if (hasCollided) {
                    this.velocity.invert();
                    other.velocity.invert();
                }
            });
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
            if (this.otherBalls.length > 0) {
                this.handleBallCollision();
            }
            this.draw.setFont("20px serif");
            const positionText = `x: ${Math.round(this.position.x)}, y: ${Math.round(this.position.y)}`;
            this.draw.text(positionText, this.position.offset(this.radius, this.radius), 'red');
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