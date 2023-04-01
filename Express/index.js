import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(), "public"))); //setting up the static folder

//setting up the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Rashid Shahriar" }); //rendering the index.ejs file
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
