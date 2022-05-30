import Vector2 from "./Vector2.js";
class Cannon {
    constructor(position, mousePos, draw) {
        this.position = position;
        this.mousePos = mousePos;
        this.draw = draw;
        this.fireAudio = new Audio("https://ia903405.us.archive.org/1/items/metal-block/Anti%20Aircraft%20Cannon-18363-Free-Loops.com.mp3");
        this.playFireSFX = () => {
            this.fireAudio.currentTime = 0.2;
            this.fireAudio.play();
        };
        this.stand = () => {
            const { ctx } = this.draw;
            const { x, y } = this.position;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 15, y - 50);
            ctx.lineTo(x + 30, y);
            ctx.stroke();
            ctx.closePath();
        };
        this.rotateTop = () => {
            const { x, y } = this.position;
            if (this.mousePos) {
                this.angle = Math.atan2(this.mousePos.y - (y - 50), this.mousePos.x - (x + 15));
                // Move origin to stand height and rotate
                this.draw.ctx.translate(x + 15, y - 50);
                this.draw.ctx.rotate(this.angle);
                this.draw.ctx.translate(-(x + 15), -(y - 50));
            }
        };
        this.getRotatedBarrelOrigin = () => {
            const cannonNozzle = this.position.offset(-20, -80).offset(100, 30);
            const { angle } = this;
            if (angle) {
                const nozzleDiff = cannonNozzle.offset(-(this.position.x + 15), -(this.position.y - 50));
                const distance = nozzleDiff.magnitude();
                const originalAngle = nozzleDiff.angle();
                const result = new Vector2((this.position.x + 15) + distance * Math.cos(angle + originalAngle), (this.position.y - 50) + distance * Math.sin(angle + originalAngle));
                return result;
            }
            else {
                return new Vector2(0, 0);
            }
        };
        this.update = () => {
            // Draw stand and save state
            this.stand();
            this.draw.ctx.save();
            // Rotate canvas at stand as origin in new state
            this.rotateTop();
            // Draw cannon top rotated 
            this.draw.setFill("red");
            this.draw.rect(this.position.offset(-20, -80), new Vector2(100, 30));
        };
    }
}
export default Cannon;
//# sourceMappingURL=Cannon.js.map