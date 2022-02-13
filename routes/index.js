const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")


router.get('/movie/:id',(req,res,next)=>{

    const id = req.params.id;
    Movie.findById(id)
    .then(
        //(movie)=>console.log(movie)
        (movie)=> res.render('details',movie)
        
        )

})

router.get('/movies',(req,res,next)=>{

    Movie.find().then(movies=>
        res.render("movies", {movies})
        //console.log(movies)
        )
    });

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
