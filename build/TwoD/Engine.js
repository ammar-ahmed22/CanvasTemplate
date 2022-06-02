class Engine {
    constructor() {
        this.world = [];
        this.create = (renderer) => {
            this.renderer = renderer;
            return this;
        };
        this.addBodies = (...bodies) => {
            this.world.push(...bodies);
        };
        this.times = [];
        this.calculateFPS = () => {
            const now = performance.now();
            while (this.times.length > 0 && this.times[0] <= now - 1000) {
                this.times.shift();
                //return this.times.length
            }
            this.times.push(now);
            //console.log(this.times);
            return this.times.length;
        };
        this.dt = performance.now();
        this.run = () => {
            requestAnimationFrame(this.run);
            this.renderer.clear();
            console.log(performance.now() - this.dt);
            this.world.forEach(body => {
                body.update(performance.now() - this.dt);
                body.draw(this.renderer);
            });
            this.dt = performance.now();
            document.getElementById("fps-display").textContent = `FPS: ${this.calculateFPS()}`;
        };
    }
}
export default Engine;
//# sourceMappingURL=Engine.js.map