import express from "express";
import path from "path";

const app = express();

const users = [];

//useing middlewares
app.use(express.static(path.join(path.resolve(), "public"))); //setting up the static folder
app.use(express.urlencoded({ extended: true }));

//setting up the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "John Doe" });
  // res.sendFile("./index"); //rendering the index.ejs file
});

app.get("/success", (req, res) => {
  res.render("success");
  // res.sendFile("./index"); //rendering the index.ejs file
});

app.post("/contact", (req, res) => {
  users.push({ usersanme: req.body.name, email: req.body.email });
  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
