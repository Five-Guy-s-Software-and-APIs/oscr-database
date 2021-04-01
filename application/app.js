const express = require("express");
const data = require("./data.json");
//const routes = require("./routes/routes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).sendFile('/index.html', {root: __dirname})
});

app.get("/search", (req, res) => {
    //res.status(200).send(req.query);
    var result = [];
    for(const nominee of data) {
        if(parseInt(nominee.year_film) === parseInt(req.query.year)) {
            result.push(nominee);
        }
    }

    res.status(200).send(JSON.stringify(result));
});

const port = process.env.PORT || 3000;

var server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});