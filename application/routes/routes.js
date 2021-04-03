const path = require("path");
const data = require(path.resolve('data.json'));

var appRouter = function (app) {
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'));
  });

  app.get("/search", (req, res) => {
    let result = [];

    //If the user doens't enter any search paramiters return nothing
    if((req.query.year_film == "" && req.query.name == "" && req.query.category == "" ))
    {
      res.status(200).json([]);
      return;
    }

    for(const nominee of data) {

        if((req.query.year_film == "" || parseInt(nominee.year_film) == parseInt(req.query.year_film)) &&
           (req.query.name == "" || nominee.name == req.query.name) &&
            (req.query.category == "" || nominee.category == req.query.category)){

              result.push(nominee);
            }
    }

    res.status(200).json(result); //Returns JSON string of all pushed awards

  });






}

  module.exports = appRouter;
