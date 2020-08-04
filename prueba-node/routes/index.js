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
  return res.json (movies);
});

module.exports = router;
