const { Router } = require("express");
const homeRouter = Router();
//include multer
homeRouter.get("/", (req, res) => {
  res.render("home");
});
homeRouter.get("/upload", (req, res) => {
  res.render("upload");
});
//post upload file goes here
homeRouter.post("/upload", async (req, res) => {});
module.exports = homeRouter;
