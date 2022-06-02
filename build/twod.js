import TwoD from "./TwoD/index.js";
import Vector2 from "./TwoD/utils/Vector2.js";
const renderer = TwoD.Render.create({
    elem: document.body,
    width: 500,
    height: 500,
});
const engine = TwoD.Engine.create(renderer);
const rect = TwoD.Bodies.Rectangle(new Vector2(0, 0), 10, 20, 20, { isStatic: false, stroke: "green" });
const circ = TwoD.Bodies.Circle(new Vector2(20, 20), 10, 10);
circ.position.Add(new Vector2(10, 10));
engine.addBodies(rect, circ);
engine.run();
//# sourceMappingURL=twod.js.map