import Draw from "./models/Draw.js"
import Vector2 from "./models/Vector2.js"
import Cannon from "./models/Cannon.js";
import CannonBall from "./models/CannonBall.js";

// Initilization
const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;

const canvasSize: Vector2 = new Vector2(600, 600)
const origin: Vector2 = new Vector2(0, 0)

canvas.height = canvasSize.y
canvas.width = canvasSize.x

let mousePos: Vector2;
let canShoot: boolean = true;

const draw: Draw = new Draw(canvas);

// Drawing borders
const drawBorder = (): void => {

    draw.setFill("#666666");
    draw.rect(origin, canvasSize);
    draw.rect(origin.offset(20, 20), canvasSize.offset(-20 * 2, -20 * 2), { stroke: false, clear: true });
}


let cannon : Cannon = new Cannon(new Vector2(80, 580), mousePos, draw)
let cannonBalls: Array<CannonBall> = []

let times: Array<number> = []

const calculateFPS = (): number => {
    const now: number = performance.now();

    while (times.length > 0 && times[0] <= now - 1000){
        times.shift()
    }

    times.push(now)

    return times.length;
}

// Animate loop
const animate = (): void => {
    requestAnimationFrame(animate)

    // Calculating fps
    const fps: number = calculateFPS();

    // Displaying fps
    document.getElementById("fps-display").innerText = `FPS: ${fps}`
    

    // Clear canvas
    draw.rect(origin, canvasSize, { stroke: false, clear: true })


    drawBorder()

    // Draw cannon with rotation
    cannon.update()
    
    // State updates at end of cannon.update() (return to original canvas while keeping cannon rotated)
    draw.ctx.restore()

    cannonBalls.forEach( ( cannonBall: CannonBall, cIdx: number ): void => {

        // Saving all other balls in current ball to check for collisions
        cannonBalls.forEach(( otherBall: CannonBall, oIdx: number): void => {
            if (cIdx !== oIdx){
                cannonBall.addOtherBall(otherBall)
            }
        })

        cannonBall.update()
    })
    
}


canvas.addEventListener("mousemove", (e): void => {
    if (mousePos){
        mousePos.x = e.clientX - canvas.offsetLeft;
        mousePos.y = e.clientY - canvas.offsetTop;
        cannon.mousePos = mousePos;
    }else{
        mousePos = new Vector2(
            e.clientX - canvas.offsetLeft,
            e.clientY - canvas.offsetTop
        )
    }
    
})

canvas.addEventListener("click", (e) : void => {
    if (cannon.angle){
        if (cannon.angle < -2 || cannon.angle > 0.5){
            return;
        }
    }

    if (!canShoot){
        return;
    }

    canShoot = false;

    
    cannonBalls.push(
        new CannonBall(cannon.angle, cannon.getRotatedBarrelOrigin(), canvasSize, draw)
    )

    cannon.playFireSFX()

    setTimeout((): void => {
        canShoot = true;
    }, 1000)
})

animate()

