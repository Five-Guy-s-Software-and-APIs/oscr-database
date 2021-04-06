const path = require("path");
const data = require(path.resolve('data.json'));
const search = require('../lib/search');

var appRouter = function (app) {
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'));
  });

  app.get("/search", (req, res) => {
    let result = data.filter(nominee => {
      return ((!req.query.year || (parseInt(nominee.year_film) == parseInt(req.query.year)))
              && (!req.query.name || nominee.name.toUpperCase().includes(req.query.name.toUpperCase()))
              && (!req.query.category || nominee.category.includes(req.query.category.toUpperCase()))
              && (!req.query.winner || nominee.winner)
              && (!req.query.film || nominee.film.toUpperCase().includes(req.query.film.toUpperCase()) || nominee.name.toUpperCase().includes(req.query.film.toUpperCase())));
    });

    let html = search.formatSearchResult(result);

    res.status(200).set('Content-Type', 'text/html').send(html);
  });
}

  module.exports = appRouter;
