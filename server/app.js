const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");
const path = require("path");
const cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "images")));

// importing the routes of user
const userRoute = require("./route");
app.use(userRoute);

const PORT = 90;
app.listen(PORT, console.log(`Running on port : ${PORT}`));
