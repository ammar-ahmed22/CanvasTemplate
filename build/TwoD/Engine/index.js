class Engine {
    constructor() {
        // constructor(
        //     public renderer: Renderer
        // ){
        // }
        this.create = () => {
            return this;
        };
        this.addBodies = (body) => {
            this.world.push(body);
        };
        this.add = (item) => {
            this.world.push(item);
        };
        this.run = () => {
            this.world.forEach(item => {
                item.update(this.renderer.ctx);
            });
        };
    }
}
export default Engine;
//# sourceMappingURL=index.js.map