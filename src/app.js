const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const controllers = require("./controllers/index");
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "..", "public")));
app.disable("x-powered-by");
app.use(compression());
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

app.use(controllers);

module.exports = app;
