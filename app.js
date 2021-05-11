const express = require("express");
const routes = require("./routes/routes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

const port = process.env.PORT || 3000;

var server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});