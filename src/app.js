const express = require("express");
const { engine } = require('express-handlebars');
const db = require("./config/database");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars Templating Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));


// Check for DB connection
db.authenticate()
  .then(() => console.info("Connection established!"))
  .catch((error) => console.error(`Error: ${error}`));

/**
 * Routes
 */
app.get("/", (request, response) => response.render("home", {title: 'YES'}));
app.use("/products", require("./routes/product"));

app.listen(PORT, () => console.log(`Server running at port: ${PORT}!`));
