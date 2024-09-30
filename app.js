const express = require("express");
const app = express();
const path = require("node:path");
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));
const homeRouter = require("./routes/homeRouter");
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.use("/", homeRouter);

app.listen(6969, console.log("Listening on Port : 6969"));
