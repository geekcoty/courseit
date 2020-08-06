var express = require('express');
var router = express.Router();
var movies = require("../data/movies.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  const person = {
    name: "juani",
    surname: "gallo",
    age: 26
  };

  return res.json (person);
});

router.get ("/movies", (req, res) =>{
  const typeMovie = movies.filter(movie => 
  movie.type === "movie") 

return res.json(typeMovie);

});

router.get("/series", (req, res) => {

  const typeSeries = movies.filter(movie => 
    movie.type ==="serie")

    return res.json(typeSeries);
});

module.exports = router;
