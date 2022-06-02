import Renderer from "./Renderer.js";
import Engine from "./Engine.js";
import Bodies from "./Bodies.js";

class TwoD{
    static Render: Renderer = new Renderer();
    static Engine: Engine = new Engine();
    static Bodies: Bodies  = new Bodies();
}

export default TwoD