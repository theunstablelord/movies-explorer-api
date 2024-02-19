const router = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  validationCreateMovie,
  validationMovieId,
} = require('../middlewares/validations');

router.get('/', getMovies);
router.post('/', createMovie, validationCreateMovie);
router.delete('/:movieId', deleteMovie, validationMovieId);

module.exports = router;
