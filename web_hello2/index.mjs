import express from "express";
import os from "os";

const app = express();
const port = 3000;  

app.get("/", (req, res) => {
    const message = "VERSION 2: Hello World from " + os.hostname();
    console.log(message);
    res.send(message);
})

app.listen(port, () => {
    console.log(`Web server is listening at port: ${port}`);
})
