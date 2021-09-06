const {Movies} = require('../../models/Movies');

async function getMovieById(req, res) {
  const {movieId} = req.params;

  return Movies.findOne({
    _id: movieId,
  })
    .populate('writer')
    .exec((err, movies) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({success: true, movies});
    });
}
module.exports = {
  getMovieById,
};
