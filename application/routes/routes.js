const path = require("path");
const data = require(path.resolve('data.json'));

var appRouter = function (app) {
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'));
  });

  app.get("/search", (req, res) => {
    let result = [];
    for(const nominee of data) {
        if(parseInt(nominee.year_film) === parseInt(req.query.year)) {
            result.push(nominee);
        }
    }

    for(const nominee of data) {
        if(nominee.name === req.query.name) {
            result.push(nominee);
        }
    }

    for(const nominee of data) {
        if(nominee.category === req.query.category) {
            result.push(nominee);
        }
    }

    res.status(200).json(result); //Returns JSON string of all pushed awards
  });






}

  module.exports = appRouter;
