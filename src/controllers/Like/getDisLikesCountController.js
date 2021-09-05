const {Dislike} = require('../../models/Dislike');

async function getDisLikesCount(req, res) {
  let variable = {};

  if (req.body.movieId) {
    variable = {movieId: req.body.movieId};
  }

  Dislike.count(variable).exec((err, dislikes) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({success: true, dislikes});
  });
}
module.exports = {
  getDisLikesCount,
};
