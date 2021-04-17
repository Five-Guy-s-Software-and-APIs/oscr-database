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
    //let html = search.formatSearchResult(result);

    //res.status(200).set('Content-Type', 'text/html').send(html);
  });

  app.get(["/categories/:category", "/year/:year_film", "/nominee-name/:name", "/film/:film", 
  "/categories/:category/year/:year_film/nominee-name/:name/film/:film",
  "/categories/:category/year/:year_film/nominee-name/:name",
  "/categories/:category/nominee-name/:name/film/:film",
  "/categories/:category/year/:year_film/:name/film/:film",
  "/year/:year_film/nominee-name/:name/film/:film",
  "/categories/:category/nominee-name/:name",
  "/categories/:category/year/:year_film",
  "/categories/:category/film/:film",
  "/nominee-name/:name/film/:film",
  "/year/:year_film/film/:film",], (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.params, nominee);
    });
    res.status(200).json(result);
  });

  app.get(["/categories/:category/winner", "/year/:year_film/winner", "/nominee-name/:name/winner", "/film/:film/winner", 
  "/categories/:category/year/:year_film/nominee-name/:name/film/:film/winner",
  "/categories/:category/year/:year_film/nominee-name/:name/winner",
  "/categories/:category/nominee-name/:name/film/:film/winner",
  "/categories/:category/year/:year_film/:name/film/:film/winner",
  "/year/:year_film/nominee-name/:name/film/:film/winner",
  "/categories/:category/nominee-name/:name/winner",
  "/categories/:category/year/:year_film/winner",
  "/categories/:category/film/:film/winner",
  "/nominee-name/:name/film/:film/winner",
  "/year/:year_film/film/:film/winner",], (req, res) => {
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
