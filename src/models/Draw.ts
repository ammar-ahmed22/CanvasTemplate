import Vector2 from "./Vector2"

class Draw{
    ctx: CanvasRenderingContext2D;
    constructor(
        public canvas: HTMLCanvasElement,
    ) {
        this.ctx = this.canvas.getContext("2d")
    }

    transformOrigin = (): void => {
        this.ctx.translate(0, this.canvas.height)
        this.ctx.scale(1, -1)
    } 

    

    setFill = (color: string): void => {
        this.ctx.fillStyle = color;
    }

    setStroke = (color: string): void => {
        this.ctx.strokeStyle = color;
    }

    rect = (position: Vector2, size: Vector2, options={stroke: false, clear: false}): void => {
        if (options.stroke){
            this.ctx.strokeRect(position.x, position.y, size.x, size.y)
        }else if (options.clear){
            this.ctx.clearRect(position.x, position.y, size.x, size.y)
        }else{
            this.ctx.fillRect(position.x, position.y, size.x, size.y)
        }
        
    }

    circle = (position: Vector2, radius: number ): void => {
        const { ctx } = this;

        ctx.beginPath();
        ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false)
        
        ctx.fill()
        ctx.closePath()
    }
}

export default Draw