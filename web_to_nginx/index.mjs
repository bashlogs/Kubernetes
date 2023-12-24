import express from "express";
import fetch from "node-fetch";
import os from "os";

const app = express();
const port = 3000;  

app.get("/", (req, res) => {
    const message = "Hello World from " + os.hostname();
    console.log(message);
    res.send(message);
})

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

app.listen(port, () => {
    console.log(`Web server is listening at port: ${port}`);
})
