import Vector2 from "./Vector2.js";
import Draw from "./Draw.js";
import Physics from "./Physics.js";

class CannonBall{
    mass: number;
    radius: number = 15
    velocity: Vector2;
    physics: Physics = new Physics();
    gravity: number = 1.5;
    elasticity: number = 0.75;
    friction: number = 0.05;
    otherBalls: Array<CannonBall> = [];
    constructor(
        public angle: number,
        public position: Vector2,
        public canvasSize: Vector2,
        public draw: Draw
    ){
        this.mass = this.radius
        this.velocity = new Vector2(
            Math.cos(angle) * 7,
            Math.sin(angle) * 7
        )
        this.physics.setPosition(this.position);
        this.physics.setVelocity(this.velocity);
        this.physics.setMass(this.mass);
    }

    addOtherBall = (ball: CannonBall): void => {
        this.otherBalls.push(ball);
    }

    handleWallCollision = (): void => {
        const wall = new Vector2(20, this.canvasSize.y - 20)

        const posBallWall = this.position.offset(this.radius, this.radius);
        const negBallWall = this.position.offset(-this.radius, -this.radius);

        
        // Ball hits right side
        if (posBallWall.x > wall.y){

            this.position.x = wall.y - this.radius;
            this.velocity.x *= -1
            this.physics.dampVelocity(new Vector2(0, this.elasticity))

        // Ball hits bottom
        }
        if (posBallWall.y > wall.y){

            this.position.y = wall.y - this.radius;
            this.velocity.y *= -1
            this.physics.dampVelocity(new Vector2(0, this.elasticity))

        // Ball hits left side
        }
        if (negBallWall.x < wall.x){

            this.position.x = wall.x + this.radius;
            this.velocity.x *= -1
            this.physics.dampVelocity(new Vector2(0, this.elasticity))

        // Ball hits top
        }
        if (negBallWall.y < wall.x){
            
            this.position.y = wall.x + this.radius;
            this.velocity.y *= -1
            this.physics.dampVelocity(new Vector2(0, this.elasticity))

        }
    }

    checkForCollision = (ball1: CannonBall, ball2: CannonBall): boolean => {
        const r1: number = ball1.radius;
        const r2: number = ball2.radius;

        const minSeparation: number = r1 + r2

        const distance: number = ball1.position.difference(ball2.position).magnitude();

        if (distance > minSeparation){
            // good to go
            return false
        }else{
            return true
        }
    }

    handleBallCollision = () => {
        this.otherBalls.forEach( ( other: CannonBall ): void => {
            const hasCollided: boolean = this.checkForCollision(this, other);

            if (hasCollided){
                // Exact separation of balls when collided
                const deltaPosition = this.position.difference(other.position);

                // Normalized separation
                const deltaPositionNorm = deltaPosition.normalized();

                const relativeVelocity = this.velocity.difference(other.velocity);

                const speed = deltaPositionNorm.dot(relativeVelocity);

                if (speed < 0) return;

                const impulse = 2 * speed / (this.mass + other.mass);

                const currResultantVelocity = new Vector2(
                    -(impulse * other.mass * deltaPositionNorm.x),
                    -(impulse * other.mass * deltaPositionNorm.y)
                )

                const otherResultantVelocity = new Vector2(
                    (impulse * other.mass * deltaPositionNorm.x),
                    (impulse * other.mass * deltaPositionNorm.y)
                )

                this.velocity.add(currResultantVelocity);
                other.velocity.add(otherResultantVelocity);
                
            }
        })
    }

    update = (): void => {
        // Physics

        // Gravity
        if (this.position.y + (this.gravity / this.mass) < 580){
            this.physics.addForce( new Vector2(0, this.gravity))
        }

        // Friction (air resistance, ground friction etc) --> all simplified into one
        this.physics.addForce(new Vector2(-(this.velocity.x * this.friction), -(this.velocity.y * this.friction)))

        this.physics.calculatePosition();

        if (this.otherBalls.length > 0){
            this.handleBallCollision();
        }
        

        // this.draw.setFont("20px serif")
        // const positionText: string = `x: ${Math.round(this.position.x)}, y: ${Math.round(this.position.y)}`
        // this.draw.text(positionText, this.position.offset(this.radius, this.radius), 'red')

        // Wall Collision
        this.handleWallCollision()

        this.draw.setFill("#000000");
        this.draw.circle(this.position, this.radius)
    }

    





}

export default CannonBall;