import express from "express";
import path from "path";
const app = express();
// Serving root directory to access static files
app.use(express.static(__dirname.replace("/build", "")));
app.get("/", (req, res) => {
    // Sends HTML
    res.sendFile(path.join(__dirname, "/../index.html"));
});
app.listen(3000, () => console.log("Server listening on port 3000"));
//# sourceMappingURL=index.js.map