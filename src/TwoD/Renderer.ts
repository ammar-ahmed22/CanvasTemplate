
interface CreateOpts{
    elem: HTMLElement,
    width?: number,
    height?: number,
    background?: string,
    stroke?: string
}

class Renderer{
    private canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public height: number;
    public width: number;
    create = ( { elem, width = 400, height = 400, background = "#000000", stroke="#ffffff" } : CreateOpts ): Renderer => {
       

        this.canvas = document.createElement("canvas");
        

        this.canvas.height = height;
        this.canvas.width = width;

        this.width = width;
        this.height = height;

        this.canvas.style.background = background
        this.canvas.style.border = "solid 1px";
        this.canvas.style.borderColor = stroke;

        this.ctx = this.canvas.getContext("2d")

        elem.appendChild(this.canvas);

        return this;
    }

    public setFill = (color: string): void => {
        this.ctx.fillStyle = color;
    }

    public setStroke = (color: string): void => {
        this.ctx.strokeStyle = color;
    }

    public clear = (): void => {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    public rect = (x: number, y: number, w: number, h: number, options={ fill: false }): void => {
        if (options.fill){
            this.ctx.fillRect(x, y, w, h)
        }else{
            this.ctx.strokeRect(x, y, w, h)
        }
    }

    public circle = (x: number, y: number, radius: number, options={ fill: false} ): void => {
        this.ctx.beginPath()
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);

        if (options.fill){
            this.ctx.fill()
        }else{
            this.ctx.stroke()
        }

        this.ctx.closePath()
    }
}

export default Renderer