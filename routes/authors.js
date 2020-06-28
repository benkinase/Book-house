const express = require("express");
const router = express.Router();

//Authors Home page
router.get("/", (req, res) => {
  res.render("authors/index");
});

//render new Author
router.get("/neu", (req, res) => {
  res.render("authors/neu");
});
//Create new author
router.post("/", (req, res) => {
  res.send("create");
});

module.exports = router;
