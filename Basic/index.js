//lets create a simple server
import http from "http";
import { generateLovePercent } from "./features.js";
import fs from "fs";

const home = fs.readFileSync("./index.html");

console.log(generateLovePercent());

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("This is the about page");
  } else if (req.url === "/contact") {
    res.end("This is the contact page");
  } else if (req.url === "/") {
    res.end(home);
  } else {
    res.end("404 Not found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
