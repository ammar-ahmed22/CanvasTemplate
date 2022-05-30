import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express()

// Serving root directory to access static files
app.use(express.static(__dirname.replace("/build", "")))

app.get("/", (req: Request, res: Response) => {
    // Sends HTML
    res.sendFile(path.join(__dirname, "/../index.html"))
})

app.listen(3000, () => console.log("Server listening on port 3000"))

