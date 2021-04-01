const express = require("express");
//const bodyParser = require("body-parser");
//const routes = require("./routes/routes.js");
const app = express();
const data = require("./data.js");

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).sendFile('/index.html', {root: __dirname})
});

app.get("/search", (req, res) => {
    res.status(200).send(req.query);
});

const port = process.env.PORT || 3000;

var server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});