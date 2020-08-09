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

router.get("/movies/:id", (req, res) => {

  const id= req.params.id
  const idMovie = movies.filter(movie =>
    movie.id == id ) 

  if (idMovie.length > 0) {
    return res.json(idMovie[0]);

  } else {
    return res.sendStatus(404)
    }
});

router.post("/contact", (req,res) => {
  const body =  req.body;
  consolos.log(body);
  return res.sendStatus("301");
});

router.get("/series", (req, res) => {

  const typeSeries = movies.filter(movie => 
    movie.type ==="serie")

    return res.json(typeSeries);
});

module.exports = router;
