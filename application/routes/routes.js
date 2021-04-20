const path = require("path");
const data = require(path.resolve('data.json'));
const search = require('../lib/search');
const match = require('../lib/matchByParameter');

var appRouter = function (app) {
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'));
  });

  app.get("/search", (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.query, nominee);
    });

    res.status(200).json(result);
  });

  app.get("/movies/categories/:category/year/:year_film", (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.params, nominee);
    });
    res.status(200).json(result);
  });

  app.get("/movies/categories/:category/year/:year_film/winner", (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.params, nominee) && nominee.winner;
    });
    res.status(200).json(result);
  });

  app.get("/public/searchbar", (req, res) => {
    res.status(200).sendFile(path.resolve('public/searchbar.html'));
  });

  app.get("/public/js/index", (req, res) => {
    res.status(200).sendFile(path.resolve('public/js/index.js'))
  })
  
}

  module.exports = appRouter;
