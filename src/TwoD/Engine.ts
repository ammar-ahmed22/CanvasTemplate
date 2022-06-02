import Body from "./Bodies/Body.js";
import Renderer from "./Renderer.js";

class Engine{
    world: Array<Body> = [];
    renderer: Renderer;


    create = (renderer: Renderer) => {
        this.renderer = renderer;
        return this;
    }

    addBodies = (...bodies: Body[]) => {
        this.world.push(...bodies)
    }

    private times: Array<number> = []
    private calculateFPS = (): number => {
        const now: number = performance.now();
        
        while (this.times.length > 0 && this.times[0] <= now - 1000){
            this.times.shift()
            //return this.times.length
        }
    
        this.times.push(now)
        //console.log(this.times);
        return this.times.length;
    }
    public dt: number = performance.now();
    run = () => {
        requestAnimationFrame(this.run)
        this.renderer.clear();

        console.log(performance.now() - this.dt);
        
        this.world.forEach( body => {
            body.update(performance.now() - this.dt)
            body.draw(this.renderer)
        })
        this.dt = performance.now();

        document.getElementById("fps-display").textContent = `FPS: ${this.calculateFPS()}`
        
        
    }
}


export default Engine