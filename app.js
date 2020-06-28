if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

//template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

//database
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to db"));

//register Routes
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
app.use("/", indexRouter);
app.use("/authors", authorRouter);

//server
const port = 3000;
app.listen(process.env.PORT || port);
