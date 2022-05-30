import Draw from "./models/Draw.js";
import Vector2 from "./models/Vector2.js";
import Cannon from "./models/Cannon.js";
import CannonBall from "./models/CannonBall.js";
// Initilization
const canvas = document.getElementById("canvas");
const canvasSize = new Vector2(600, 600);
const origin = new Vector2(0, 0);
canvas.height = canvasSize.y;
canvas.width = canvasSize.x;
let mousePos;
let canShoot = true;
const draw = new Draw(canvas);
// Drawing borders
const drawBorder = () => {
    draw.setFill("#666666");
    draw.rect(origin, canvasSize);
    draw.rect(origin.offset(20, 20), canvasSize.offset(-20 * 2, -20 * 2), { stroke: false, clear: true });
};
let cannon = new Cannon(new Vector2(80, 580), mousePos, draw);
let cannonBalls = [];
let times = [];
let fps;
// Animate loop
const animate = () => {
    requestAnimationFrame(animate);
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);
    fps = times.length;
    //console.log(times);
    document.getElementById("fps-display").innerText = `FPS: ${fps}`;
    // Clear canvas
    draw.rect(origin, canvasSize, { stroke: false, clear: true });
    drawBorder();
    cannon.update();
    // State updates at end of cannon.update()
    draw.ctx.restore();
    cannonBalls.forEach((cannonBall) => {
        cannonBall.update();
    });
};
canvas.addEventListener("mousemove", (e) => {
    if (mousePos) {
        mousePos.x = e.clientX - canvas.offsetLeft;
        mousePos.y = e.clientY - canvas.offsetTop;
        cannon.mousePos = mousePos;
    }
    else {
        mousePos = new Vector2(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
});
canvas.addEventListener("click", (e) => {
    if (cannon.angle) {
        if (cannon.angle < -2 || cannon.angle > 0.5) {
            return;
        }
    }
    if (!canShoot) {
        return;
    }
    canShoot = false;
    cannonBalls.push(new CannonBall(cannon.angle, cannon.getRotatedBarrelOrigin(), canvasSize, draw));
    cannon.playFireSFX();
    setTimeout(() => {
        canShoot = true;
    }, 1000);
});
animate();
//# sourceMappingURL=canvas.js.map